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
