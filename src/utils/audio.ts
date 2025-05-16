/**
 * 音频工具函数
 */

// 创建音频上下文和节点链
export const createAudioContext = () => {
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  // 正确连接节点链：source -> analyser -> gain -> destination
  return { audioContext, analyser, gainNode };
};

// 加载音频缓冲区
export const loadAudioBuffer = async (
  audioContext: AudioContext,
  url: string
) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return audioContext.decodeAudioData(arrayBuffer);
};

// 创建音频源节点
export const createSourceNode = (
  audioContext: AudioContext,
  buffer: AudioBuffer,
  analyser: AnalyserNode,
  gainNode: GainNode
) => {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(analyser);
  analyser.connect(gainNode);
  return source;
};

// 平滑音量变化
export const setSmoothVolume = (gainNode: GainNode, volume: number) => {
  const safeVolume = Math.max(0, Math.min(1, volume));
  gainNode.gain.value = safeVolume;
};
