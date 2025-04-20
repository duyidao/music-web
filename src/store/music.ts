export const audioContext = ref<AudioContext>(null); // 音频上下文
export const gainNode = ref<GainNode>(null); // 音量控制节点
export const activeInstance = ref<any>(null); // 当前播放实例

export const init = () => {
  if (audioContext.value) return;
  audioContext.value = new window.AudioContext();
  gainNode.value = audioContext.value.createGain();
  gainNode.value.connect(audioContext.value.destination);
};

export const audioBuffer = ref<AudioBuffer>(null); // 音频缓冲区
export const duration = ref<number>(0); // 音频时长
// 加载音频文件
export const load = async (url: string) => {
  try {
      // 停止当前正在播放的实例
  console.log(activeInstance.value);
  
  if (activeInstance.value && activeInstance.value !== null) {
    activeInstance.value.destroy();
    activeInstance.value = null;
  }

  init();

    const response = await fetch(url);
    console.log('response', response);
    console.log('audioContext.value', audioContext.value);

    const arrayBuffer = await response.arrayBuffer();
    audioBuffer.value = await audioContext.value.decodeAudioData(arrayBuffer);
    duration.value = audioBuffer.value.duration;
    play();
    return true;
  } catch (err) {
    console.error("音频加载失败:", err);
    return false;
  }
};

export const isPlaying = ref<boolean>(false); // 是否正在播放
export const sourceNode = ref<AudioBufferSourceNode>(null); // 音频源节点
export const pauseTime = ref<number>(0); // 暂停时间
export const startTime = ref<number>(0); // 开始时间
// 播放控制
export function play() {
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

  if (!audioBuffer.value) return false;

  // 创建新的音频源节点
  console.log('audioContext.value', audioContext.value);
  
  sourceNode.value = audioContext.value.createBufferSource();
  sourceNode.value.buffer = audioBuffer.value;
  sourceNode.value.connect(gainNode.value);

  const offset = pauseTime.value;
  sourceNode.value.start(0, offset);
  startTime.value = audioContext.value.currentTime - offset;
  isPlaying.value = true;

  _trackProgress();
  return true;
}

export const pause = () => {
  if (isPlaying.value) {
    sourceNode.value.stop();
    pauseTime.value = audioContext.value.currentTime - startTime.value;
    isPlaying.value = false;
    cancelAnimationFrame(_animationFrameId.value);
    return true;
  }
  return false;
};

export const stop = () => {
  if (isPlaying.value) {
    sourceNode.value.stop();
    isPlaying.value = false;
  }
  pauseTime.value = 0;
  cancelAnimationFrame(_animationFrameId);
};

// 音量控制 (0-1)
export const setVolume = (level: any) => {
  gainNode.value.gain.setValueAtTime(level, audioContext.value.currentTime);
};

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
export const _animationFrameId = ref<number>(null); // 动画帧 ID

// 进度跟踪
export function _trackProgress() {
  const update = () => {
    if (isPlaying.value) {
      const currentTime = audioContext.value.currentTime - startTime.value;
      if (_progressCallback.value) {
        _progressCallback.value({
          currentTime: currentTime,
          duration: duration.value,
          progress: (currentTime / duration.value) * 100,
        });
      }
      _animationFrameId.value = requestAnimationFrame(update);
    }
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
    audioContext.value.close();
    sourceNode?.value.disconnect();
    gainNode?.value.disconnect();
    audioContext.value = null;
  }
}
