import { musicList, modelList } from "./data.ts";
import { audioState } from "./music.ts";
import { currentTime, duration, next } from "./contorl.ts";
import type { MusicItem } from "@/types/music.ts";

// 用户数据
export const userTime = ref<Record<string, number>>({
  Bones: 360,
  Demons: 15,
  Brids: 7800,
  "Bad Liar": 20,
  "Season in the Sun": 0,
  Shots: 0,
});

export const userColor = ref("#4fa273");

/**
 * 设置主题颜色
 *
 * @param color 主题颜色，默认为 "#4fa273"
 */
export const setThemeColor = (color: string = "#4fa273") => {
  userColor.value = color;
  document.documentElement.style.setProperty("--base-color", color);
};
setThemeColor();

// 添加听歌时间
export const addListeningTime = (songId: string, seconds: number) => {
  const song = musicList.value.find((item) => item.id === songId);
  if (song) {
    song.time = (song.time || 0) + seconds;
  }
};

// 扣除听歌时间
export const reduceListeningTime = (songId: string, seconds: number) => {
  const song = musicList.value.find((item) => item.id === songId);
  if (song) {
    song.time = (song.time || 0) - seconds;
  }
};

export const nextPlayTimeout = ref<any>(null);
export const nextPlayInterval = ref<any>(null);

// 检查是否可以播放
export const canPlay = (song: MusicItem, action: "load" | "play" = "load") => {
  // 正在播放同一首歌且未结束
  if (
    action === "load" &&
    song.audioUrl === audioState.value.currentSong?.audioUrl &&
    Math.abs(duration.value - currentTime.value) > 1
  ) {
    return false;
  }

  // 试听歌曲处理
  if (song.type === 1 && (song.time || 0) <= 0) {
    let timer = 5;
    nextPlayInterval.value = setInterval(() => {
      modelList.value.unshift(`试听中，${timer}秒后播放下一首`);
      timer--;
    }, 1000);
    nextPlayTimeout.value = setTimeout(() => {
      next();
      clearTimeoutFn();
    }, 5000);
    return true;
  }

  // 无剩余时长
  if (song.time !== undefined && song.time <= 0) {
    modelList.value.unshift("可听部分已结束，请购买或选择其他歌曲");
    nextPlayTimeout.value = setTimeout(() => {
      next();
      clearTimeoutFn();
    }, 3000);
    return false;
  }

  return true;
};

/**
 * 清除计时器
 *
 * 该函数用于清除已经设置的计时器，以避免执行不需要的操作。
 */
export const clearTimeoutFn = () => {
  clearTimeout(nextPlayTimeout.value);
  clearInterval(nextPlayInterval.value);
  nextPlayTimeout.value = null;
  nextPlayInterval.value = null;
};
