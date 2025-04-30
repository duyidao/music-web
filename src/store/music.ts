import {
  volume,
  playIndex,
  currentTime,
  duration,
  progress,
} from "./contorl.ts";
import { musicList, modelList } from "./data.ts";
import type { MusicItem } from "@/types/music.ts";
import { order, nextSong } from './contorl.ts'

export const audioContext = ref<AudioContext | null>(null); // 音频上下文
export const gainNode = ref<GainNode | null>(null); // 音量控制节点
export const activeInstance = ref<any>(null); // 当前播放实例

export const init = () => {
  if (audioContext.value) return;
  audioContext.value = new window.AudioContext();
  gainNode.value = audioContext.value.createGain();
  gainNode.value.connect(audioContext.value.destination);
  setVolume(volume.value);
};

export const audioBuffer = ref<AudioBuffer | null>(null); // 音频缓冲区
export const isPlaying = ref<boolean>(false); // 是否正在播放
export const sourceNode = ref<AudioBufferSourceNode | null>(null); // 音频源节点
export const pauseTime = ref<number>(0); // 暂停时间
export const startTime = ref<number>(0); // 开始时间
export const wantMoney = ref<boolean>(true); // 开始时间
const nowPlay = ref<MusicItem>({} as MusicItem)

// 加载音频文件
export const load = async (
  item: MusicItem = musicList.value[playIndex.value]
) => {
  if (!!nowPlay.value.audioUrl && item.audioUrl === nowPlay.value.audioUrl && !(Math.abs(duration.value - currentTime.value) <= 1)) return;

  const index = musicList.value.findIndex((i) => i.audioUrl === item.audioUrl);
  playIndex.value = index;

  // 停止当前正在播放的实例, 创建新的音频源节点
  if (activeInstance.value && activeInstance.value !== null) {
    activeInstance.value.destroy();
    activeInstance.value = null;
  }
  init();

  try {
    modelList.value.unshift(`正在加载音频：${item.id}`);
    const response = await fetch(item.audioUrl);
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer.value = await audioContext.value!.decodeAudioData(arrayBuffer);
    duration.value = audioBuffer.value.duration;
    nowPlay.value = item;
    play();
    return true;
  } catch (err) {
    console.error("音频加载失败:", err);
    return false;
  }
};

export const beginListen = ref(0)
export const endListen = ref(0)

// 播放控制
export function play() {
  // 如果没有时长，不给播放
  if (wantMoney.value && nowPlay.value.hasOwnProperty('time') && (nowPlay.value?.time ?? 0) <= 0) {
    modelList.value.unshift('当前歌曲可听部分已结束，请重新购买或选择其他音频。')
    return;
  }

  if (!audioBuffer.value) {
    load(); // 如果没有音频缓冲区，则加载音频
    return;
  }
  // 设置当前活动实例
  activeInstance.value = {
    play,
    pause,
    stop,
    destroy,
    setVolume,
    seek,
    onProgress,
  };

  sourceNode.value = audioContext.value!.createBufferSource();
  sourceNode.value.buffer = audioBuffer.value;
  sourceNode.value.connect(gainNode.value!);
  const offset = pauseTime.value;
  sourceNode.value.start(0, offset);
  startTime.value = audioContext.value!.currentTime - offset;
  isPlaying.value = true;
  beginListen.value = Date.now()

  // 如果是正常播放完毕，则根据当前类型决定下一首的播放方式
  sourceNode.value.onended = () => {
    if (Math.abs(duration.value - currentTime.value) <= 1) {
      nextSong[order.value]();
    }
  }

  _trackProgress();
  return true;
}

// 暂停或停止，都计算当前音频剩余时长
export const timeCompute = () => {
  if (nowPlay.value!.hasOwnProperty('time')) {
    const index = musicList.value.findIndex((i) => i.audioUrl === nowPlay.value.audioUrl);
    (musicList.value![index] as any).time -= Number(((endListen.value - beginListen.value) / 1000).toFixed(0));
  }
}

export const pause = () => {
  if (isPlaying.value) {
    sourceNode.value!.stop();
    pauseTime.value = audioContext.value!.currentTime - startTime.value;
    isPlaying.value = false;
    cancelAnimationFrame(_animationFrameId.value!);
    endListen.value = Date.now();

    timeCompute();
    return true;
  }
  return false;
};

export const stop = () => {
  if (isPlaying.value) {
    isPlaying.value = false;
    sourceNode.value!.stop();
    sourceNode.value!.disconnect();
    endListen.value = Date.now()
    timeCompute();
    nowPlay.value = {} as MusicItem;
  }
  pauseTime.value = 0;
  cancelAnimationFrame(_animationFrameId.value!);
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

// 进度跟踪
export function _trackProgress() {
  const update = () => {
    if (!isPlaying.value) return;
    currentTime.value = audioContext.value!.currentTime - startTime.value;
    if (duration.value !== 0 && currentTime.value >= duration.value) stop();
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

// 事件监听
export function onProgress(callback: any) {
  _progressCallback.value = callback;
}

// 销毁实例
export function destroy() {
  stop();
  if (audioContext.value) {
    audioContext.value?.close();
    sourceNode.value?.disconnect();
    gainNode.value?.disconnect();
    audioContext.value = null;
    gainNode.value = null;
    sourceNode.value = null;
  }
}
