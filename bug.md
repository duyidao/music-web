# BUG

## Uncaught InvalidStateError: Failed to execute 'start' on 'AudioBufferSourceNode': cannot call start more than once.

原因：我把 `sourceNode.value = audioContext.value.createBufferSource();` 代码写到了 `load` 函数里，而不是写到了 `play` 函数里，每次点击播放按钮都是用的旧值，导致报错。

解决：把 `sourceNode.value = audioContext.value.createBufferSource();` 代码写到了 `play` 函数里。每次点击都重新创建 `sourceNode`。

::: code-group
```ts [old.ts]
export const load = async (item: string = musicList.value[playIndex.value]) => {
  if (item.audioUrl === currentMusic.value?.audioUrl) return;
  currentMusic.value = item;
  // 停止当前正在播放的实例, 创建新的音频源节点
  if (activeInstance.value && activeInstance.value !== null) {
    activeInstance.value.destroy();
    activeInstance.value = null;
  }
  init();
  try {
    const response = await fetch(item.audioUrl);
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer.value = await audioContext.value.decodeAudioData(arrayBuffer);
    duration.value = audioBuffer.value.duration;
    sourceNode.value = audioContext.value.createBufferSource();
    sourceNode.value.buffer = audioBuffer.value;
    sourceNode.value.connect(gainNode.value);
    play();
    return true;
  } catch (err) {
    console.error("音频加载失败:", err);
    return false;
  }
};

// 播放控制
export function play() {
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
  };

  const offset = pauseTime.value;
  sourceNode.value.start(0, offset);
  startTime.value = audioContext.value.currentTime - offset;
  isPlaying.value = true;

  _trackProgress();
  return true;
}
```
```ts [new.ts]
export const load = async (item: string = musicList.value[playIndex.value]) => {
  if (item.audioUrl === currentMusic.value?.audioUrl) return;
  currentMusic.value = item;
  // 停止当前正在播放的实例, 创建新的音频源节点
  if (activeInstance.value && activeInstance.value !== null) {
    activeInstance.value.destroy();
    activeInstance.value = null;
  }
  init();
  try {
    const response = await fetch(item.audioUrl);
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

// 播放控制
export function play() {
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
  };

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
```
:::