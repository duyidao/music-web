import { currentMusic } from "./data.ts";
import {
  volume,
  playIndex,
  currentTime,
  duration,
  progress,
  order,
  nextSong,
} from "./contorl.ts";
import { musicList } from "./data.ts";
import { newLoad } from "./load.ts";
import type { MusicItem } from "@/types/music.ts";
import { canPlayFn } from "./user.ts";

export const audioContext = ref<AudioContext | null>(null); // 音频上下文
export const gainNode = ref<GainNode | null>(null); // 音量控制节点
export const analyser = ref<AnalyserNode | null>(null); // 音频分析器

/**
 * 初始化音频上下文及节点链
 */
export const init = () => {
  if (audioContext.value) return;
  audioContext.value = new window.AudioContext();

  // 创建分析器和增益节点
  analyser.value = audioContext.value.createAnalyser();
  analyser.value.fftSize = 256;
  gainNode.value = audioContext.value.createGain();

  gainNode.value = audioContext.value.createGain();
  // 正确连接节点链：source -> analyser -> gain -> destination
  gainNode.value.connect(audioContext.value.destination);
  setVolume(volume.value);
};

export const audioBuffer = ref<AudioBuffer | null>(null); // 音频缓冲区
export const isPlaying = ref<boolean>(false); // 是否正在播放
export const sourceNode = ref<AudioBufferSourceNode | null>(null); // 音频源节点
export const pauseTime = ref<number>(0); // 暂停时间
export const startTime = ref<number>(0); // 开始时间
export const nowPlay = ref<MusicItem>({} as MusicItem);

export let cancel = () => {};

// 加载音频文件
export async function load(item: MusicItem = musicList.value[playIndex.value]) {
  const newload = newLoad(item);
  const flag = await newload.run();
  cancel = newload.cancel;

  if (flag) {
    play(false);
  }
}

export const beginListen = ref(0);
export const endListen = ref(0);
const documentHidden = () => {
  if (document.hidden) {
    // 页面切到后台：停用 requestAnimationFrame，改用 setInterval
    _switchToBackgroundUpdate();
  } else {
    // 页面回到前台：停用 setInterval，恢复 requestAnimationFrame
    _switchToForegroundUpdate();
    // 恢复可能被暂停的 AudioContext
    _resumeAudioContextIfNeeded();
  }
};

// 播放控制
export function play(needStop = true) {
  // 如果没有音频缓冲区，则加载音频
  if (!audioBuffer.value) {
    load();
    return;
  }
  if (needStop) {
    const flag = canPlayFn(
      nowPlay.value.id ? nowPlay.value : currentMusic.value,
      "play"
    ); // 播放前先调用canplay事件
    if (!flag) return;
  }

  sourceNode.value = audioContext.value!.createBufferSource();
  sourceNode.value.buffer = audioBuffer.value;
  // 连接音频源到分析器
  sourceNode.value.connect(analyser.value!);
  analyser.value!.connect(gainNode.value!);

  const offset = pauseTime.value;
  sourceNode.value.start(0, offset);
  startTime.value = audioContext.value!.currentTime - offset;
  isPlaying.value = true;
  beginListen.value = Date.now();

  documentHidden();
}

// 暂停或停止，都计算当前音频剩余时长
export const timeCompute = () => {
  if (nowPlay.value!.hasOwnProperty("time") && nowPlay.value.type !== 1) {
    const index = musicList.value.findIndex(
      (i) => i.audioUrl === nowPlay.value.audioUrl
    );
    (musicList.value![index] as any).time -= Number(
      ((endListen.value - beginListen.value) / 1000).toFixed(0)
    );
  }
};

export const pause = () => {
  if (isPlaying.value) {
    sourceNode.value!.stop();
    pauseTime.value = audioContext.value!.currentTime - startTime.value;
    isPlaying.value = false;
    endListen.value = Date.now();
    timeCompute();
  }
  clearIntervalOrRAF();
};

export const stop = () => {
  if (isPlaying.value) {
    isPlaying.value = false;
    sourceNode.value!.stop();
    sourceNode.value!.disconnect();
    endListen.value = Date.now();
    timeCompute();
    nowPlay.value = {} as MusicItem;
  }
  clearIntervalOrRAF();
  pauseTime.value = 0;
};

// 音量控制 (0-1)
export function setVolume(level: any) {
  // 确保音量范围在 0-1 之间
  const safeVolume = Math.max(0, Math.min(1, level));
  if (gainNode.value && audioContext.value) {
    // 使用指数渐变实现平滑音量变化
    gainNode.value.gain.value = safeVolume;
  }
}

// 跳转到指定时间 (秒)
export const seek = (time: any) => {
  if (time >= 0 && time <= duration.value) {
    const wasPlaying = isPlaying.value;
    pause();
    pauseTime.value = time;
    if (wasPlaying) play();
    return true;
  }
  return false;
};

export const _progressCallback = ref<any>(null); // 进度回调函数
export const _animationFrameId = ref<number>(); // 动画帧 ID
export const _backgroundIntervalId = ref<any>(null); // 动画定时器

function clearIntervalOrRAF() {
  if (_animationFrameId.value) {
    cancelAnimationFrame(_animationFrameId.value);
    _animationFrameId.value = 0;
  }
  if (_backgroundIntervalId.value) {
    clearInterval(_backgroundIntervalId.value);
    _backgroundIntervalId.value = null;
  }
}

// 进度跟踪：使用 requestAnimationFrame 更新进度（前台）
export function _trackProgressWithRAF() {
  const update = () => {
    if (!isPlaying.value) return;
    // 计算当前播放时间
    currentTime.value = audioContext.value!.currentTime - startTime.value;
    // 如果是正常播放完毕，则根据当前类型决定下一首的播放方式
    if (duration.value !== 0 && currentTime.value >= duration.value) {
      stop();
      nextSong[order.value]();
    }
    if (_progressCallback.value) {
      _progressCallback.value({
        currentTime: currentTime.value,
        duration: duration.value,
        progress: (progress.value as unknown as number) * 100,
      });
    }
    _animationFrameId.value = requestAnimationFrame(update);
  };
  update();
}

// 进度跟踪：使用 setInterval 更新进度（后台）
function _trackProgressWithInterval() {
  const update = () => {
    if (!isPlaying.value) return;
    // 计算当前播放时间
    currentTime.value = audioContext.value!.currentTime - startTime.value;
    // 检测播放结束
    if (duration.value !== 0 && currentTime.value >= duration.value) {
      stop();
      nextSong[order.value]();
    }
  };
  // 设置1秒间隔（可根据需求调整）
  _backgroundIntervalId.value = setInterval(update, 1000);
}

// 增强的销毁函数
export function destroy() {
  stop();
  clearIntervalOrRAF();
  // 断开所有节点连接
  if (sourceNode.value) {
    sourceNode.value.disconnect();
    sourceNode.value = null;
  }

  if (analyser.value) {
    analyser.value.disconnect();
    analyser.value = null;
  }

  if (gainNode.value) {
    gainNode.value.disconnect();
    gainNode.value = null;
  }

  // 关闭音频上下文
  if (audioContext.value) {
    audioContext.value
      .close()
      .catch((e) => console.error("关闭音频上下文失败:", e));
    audioContext.value = null;
  }

  // 重置状态
  audioBuffer.value = null;
  pauseTime.value = 0;
  startTime.value = 0;
  isPlaying.value = false;
}

// 切换到前台更新（高性能）
const _switchToForegroundUpdate = () => {
  // 清除后台的 setInterval
  if (_backgroundIntervalId.value) {
    clearInterval(_backgroundIntervalId.value);
    _backgroundIntervalId.value = null;
  }
  // 启动 requestAnimationFrame
  if (!_animationFrameId.value) {
    _trackProgressWithRAF();
  }
};

// 切换到后台更新（确保持续检测）
const _switchToBackgroundUpdate = () => {
  // 清除前台的 requestAnimationFrame
  if (_animationFrameId.value) {
    cancelAnimationFrame(_animationFrameId.value);
    _animationFrameId.value = 0;
  }
  // 启动 setInterval（间隔1秒）
  if (!_backgroundIntervalId.value) {
    _trackProgressWithInterval();
  }
};

// 恢复 AudioContext（处理浏览器自动暂停）
const _resumeAudioContextIfNeeded = async () => {
  if (audioContext.value?.state === "suspended") {
    await audioContext.value.resume();
    // 校准播放时间（避免因暂停导致的时间偏差）
    startTime.value = audioContext.value.currentTime - pauseTime.value;
  }
};

// 添加页面可见性监听
document.addEventListener("visibilitychange", documentHidden);
