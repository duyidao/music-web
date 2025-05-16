import {
  createAudioContext,
  loadAudioBuffer,
  createSourceNode,
  setSmoothVolume,
} from "@/utils/audio";
import { musicList, modelList } from "./data_副本.ts";
import { canPlay } from "./user_副本.ts";
import { playIndex, currentTime, duration, volume } from "./contorl_副本.ts";

// 音频状态
export const audioState = ref({
  context: null as AudioContext | null, // 音频上下文
  analyser: null as AnalyserNode | null, // 频域分析器
  gainNode: null as GainNode | null, // 音量控制节点
  buffer: null as AudioBuffer | null, // 音频缓冲区
  source: null as AudioBufferSourceNode | null, // 音频源节点
  isPlaying: false, // 是否正在播放
  pauseTime: 0, // 暂停时间
  startTime: 0, // 开始时间
});

// 初始化音频上下文
const initAudio = () => {
  if (audioState.value.context) return;

  const { audioContext, analyser, gainNode } = createAudioContext();
  audioState.value.context = audioContext;
  audioState.value.analyser = analyser;
  audioState.value.gainNode = gainNode;
  setVolume(volume.value);
};

// 加载音频
export const loadAudio = async (item: MusicItem = musicList.value[playIndex.value]) => {
  if (!canPlay(item)) return false;

  try {
    initAudio();
    const buffer = await loadAudioBuffer(
      audioState.value.context!,
      item.audioUrl
    );
    audioState.value.buffer = buffer;
    duration.value = buffer.duration;
    return true;
  } catch (err) {
    modelList.value.unshift(`音频加载失败：${err}`);
    return false;
  }
};

// 播放控制
export const playAudio = (offset = 0) => {
  if (!audioState.value.buffer) return;

  stopAudio(); // 停止当前播放

  audioState.value.source = createSourceNode(
    audioState.value.context!,
    audioState.value.buffer,
    audioState.value.analyser!,
    audioState.value.gainNode!
  );

  audioState.value.source.start(0, offset);
  audioState.value.startTime = audioState.value.context!.currentTime - offset;
  audioState.value.isPlaying = true;
  startProgressTracking();
};

const pauseAudio = () => {
  if (!audioState.value.isPlaying) return;

  audioState.value.source?.stop();
  audioState.value.pauseTime =
    audioState.value.context!.currentTime - audioState.value.startTime;
  audioState.value.isPlaying = false;
  stopProgressTracking();
};

/**
 * 停止音频播放
 *
 * 调用此方法会停止当前正在播放的音频，并停止音频进度跟踪。
 */
export const stopAudio = () => {
  if (!audioState.value.isPlaying) return;

  audioState.value.source?.stop();
  audioState.value.source?.disconnect();
  audioState.value.isPlaying = false;
  stopProgressTracking();
};

// 进度跟踪
let animationFrameId: number;
let backgroundIntervalId: number;

/**
 * 开始进度跟踪
 */
const startProgressTracking = () => {
  const update = () => {
    if (!audioState.value.isPlaying) return;

    currentTime.value =
      audioState.value.context!.currentTime - audioState.value.startTime;

    if (currentTime.value >= duration.value) {
      stopAudio();
      nextSong(); // 播放下一首
    }
  };

  if (document.hidden) {
    backgroundIntervalId = setInterval(update, 1000);
  } else {
    const track = () => {
      update();
      animationFrameId = requestAnimationFrame(track);
    };
    animationFrameId = requestAnimationFrame(track);
  }
};

/**
 * 停止进度跟踪
 *
 * 停止动画帧和背景定时器
 */
const stopProgressTracking = () => {
  cancelAnimationFrame(animationFrameId);
  clearInterval(backgroundIntervalId);
};

// 音量控制
const setVolume = (level: number) => {
  if (audioState.value.gainNode) {
    setSmoothVolume(audioState.value.gainNode, level);
  }
};

// 清理资源
const destroy = () => {
  stopAudio();
  // 关闭音频上下文
  audioState.value.context?.close();
  // 断开所有节点连接
  ['analyser', 'gainNode', 'source'].forEach(e => {
    audioState.value[e].disconnect();
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
};
