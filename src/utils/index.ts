/**
 * @description 格式化时间
 * @param {number} timestamp 时间戳
 * @return {string} 格式化后的时间字符串
 */
export function formatDuration(seconds: number) {
  // 处理非数字输入
  if (isNaN(seconds)) return "00:00";

  // 处理负数
  const absSeconds = Math.abs(Math.floor(seconds));

  const hours = Math.floor(absSeconds / 3600);
  const mins = Math.floor((absSeconds % 3600) / 60);
  const secs = absSeconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(hours.toString().padStart(2, "0"));
  }
  parts.push(mins.toString().padStart(2, "0"));
  parts.push(secs.toString().padStart(2, "0"));

  return parts.join(":");
}

export const getRandomIndex = (len: number = 1, nowIndex?: number): number => {
  let index = Math.floor(Math.random() * len);
  if (index === nowIndex) getRandomIndex(len, nowIndex);
  return index;
}

export const ratio = ref(window.innerWidth / 750);
export const screenWidth = ref(0);
export const pxToRem = () => {
  ratio.value = window.innerWidth / 750;
  screenWidth.value = window.innerWidth;
}