import {
  createAudioContext,
  loadAudioBuffer,
  createSourceNode,
  setSmoothVolume,
} from "@/utils/audio";
import { musicList, modelList } from "./data.ts";
import { reduceListeningTime } from "./user.ts";
import {
  playIndex,
  currentTime,
  duration,
  volume,
  next,
  documentHidden,
} from "./contorl.ts";
import type { MusicItem } from '@/types/music.ts'

// 音频状态
export const audioState = ref({
  context: null as AudioContext | null, // 音频上下文
  analyser: null as AnalyserNode | null, // 频域分析器
  gainNode: null as GainNode | null, // 音量控制节点
  buffer: null as AudioBuffer | null, // 音频缓冲区
  source: null as AudioBufferSourceNode | null, // 音频源节点
  isPlaying: false, // 是否正在播放
  currentSong: null as MusicItem | null, // 当前播放的歌曲
  pauseTime: 0, // 暂停时间
  startTime: 0, // 开始时间
});

// 初始化音频上下文
export const initAudio = () => {
  destroy();

  const { audioContext, analyser, gainNode } = createAudioContext();
  audioState.value.context = audioContext;
  audioState.value.analyser = analyser;
  audioState.value.gainNode = gainNode;
  setVolume(volume.value);
};

const musicMap = new Map<string, AudioBuffer>(); // 缓存音频缓冲区的映射

// 加载音频
export const loadAudio = async (
  item: MusicItem = musicList.value[playIndex.value]
) => {
  try {
    initAudio();
    let buffer = musicMap.get(item.id);
    if (!buffer) {
      buffer = await loadAudioBuffer(audioState.value.context!, item.audioUrl);
      musicMap.set(item.id, buffer);
    }
    audioState.value.buffer = buffer;
    duration.value = buffer.duration;
    return true;
  } catch (err) {
    modelList.value.unshift(`音频加载失败：${err}`);
    return false;
  }
};

/**
 * 播放音频
 */
export const playAudio = () => {
  audioState.value.source = createSourceNode(
    audioState.value.context!,
    audioState.value.buffer,
    audioState.value.analyser!,
    audioState.value.gainNode!
  );
  audioState.value.currentSong = musicList.value[playIndex.value];

  const offset = audioState.value.pauseTime;
  audioState.value.source.start(0, offset);
  audioState.value.startTime = audioState.value.context!.currentTime - offset;
  audioState.value.isPlaying = true;
  startProgressTracking();
};

/**
 * 暂停音频播放
 *
 * 暂停当前正在播放的音频，并停止进度追踪
 */
export const pauseAudio = () => {
  if (!audioState.value.isPlaying) return;

  audioState.value.source?.stop();
  audioState.value.pauseTime =
    audioState.value.context!.currentTime - audioState.value.startTime;
  audioState.value.isPlaying = false;
  reduceListeningTime(musicList.value[playIndex.value].id, audioState.value.pauseTime.toFixed(0));
  stopProgressTracking();
};

/**
 * 停止音频播放
 *
 * 调用此方法会停止当前正在播放的音频，并停止音频进度跟踪。
 */
export const stopAudio = () => {
  if (!audioState.value.isPlaying) return;
  reduceListeningTime(musicList.value[playIndex.value].id, audioState.value.pauseTime.toFixed(0));
  destroy();
};

// 进度跟踪
let animationFrameId: number | null;
let backgroundIntervalId: number | null;

/**
 * 更新音频播放状态
 *
 * 如果音频未播放，则返回。否则更新当前播放时间，并在播放时间达到音频总时长时停止当前音频并播放下一首。
 */
const update = () => {
  if (!audioState.value.isPlaying) return;

  currentTime.value =
    audioState.value.context!.currentTime - audioState.value.startTime;

  if (duration.value !== 0 && currentTime.value >= duration.value) {
    stopAudio();
    next(); // 播放下一首
  }
};

/**
 * 开始进度跟踪
 */
function startProgressTracking() {
  stopProgressTracking(); // 停止之前的进度跟踪，防止重复跟踪
  documentHidden(backgroundIntervalId, animationFrameId, update);
}

document.addEventListener("visibilitychange", () => {
  documentHidden(backgroundIntervalId, animationFrameId, update);
});

/**
 * 停止进度跟踪
 *
 * 停止动画帧和背景定时器
 */
function stopProgressTracking() {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
  clearInterval(backgroundIntervalId);
  backgroundIntervalId = null;
}

/**
 * 设置音频音量
 *
 * @param level 音量等级，范围在 0 到 1 之间
 */
export const setVolume = (level: number) => {
  if (audioState.value.gainNode) {
    setSmoothVolume(audioState.value.gainNode, level);
  }
};

/**
 * 跳转播放音频到指定时间
 *
 * @param time 目标时间（秒），必须大于等于0且小于等于音频总时长
 */
export const seek = (time: number) => {
  if (time >= 0 && time <= duration.value) {
    const prevPlaying = audioState.value.isPlaying;
    pauseAudio(); // 暂停播放
    audioState.value.pauseTime = time;
    if (prevPlaying) {
      playAudio(); // 恢复播放
    }
  }
};

/**
 * 销毁音频实例
 *
 * 停止音频播放，关闭音频上下文，断开所有节点连接，并重置音频状态
 */
export const destroy = () => {
  audioState.value.source?.stop();
  // 关闭音频上下文
  audioState.value.context
    ?.close()
    .catch((e) => console.error("关闭音频上下文失败:", e));
  // 断开所有节点连接
  ["analyser", "gainNode", "source"].forEach((e) => {
    audioState.value[e]?.disconnect();
  });
  audioState.value = {
    context: null,
    analyser: null,
    gainNode: null,
    buffer: null,
    source: null,
    isPlaying: false,
    pauseTime: 0,
    startTime: 0,
  };
  stopProgressTracking();
};
