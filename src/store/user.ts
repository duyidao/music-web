import { MusicItem } from "../types/music.ts";
import { nowPlay } from "./music.ts";
import { duration, currentTime } from "./contorl.ts";
import { musicList, modelList } from "./data.ts";

export const userTime = ref({
  "Bones": 360,
  "Demons": 15,
  "Brids": 7800,
  "Bad Liar": 0,
  "Season In The Sun": 0,
  "Shots": 0,
});

export const userColor = ref("");

/**
 * 修改主题色
 * @param color 主题色
 */
export const setUserColor = (color: string = "#4fa273") => {
  userColor.value = color;
  document.documentElement.style.setProperty(`--base-color`, userColor.value);
};
setUserColor();

/**
 * 添加用户听歌时间
 * @param id 歌曲id
 * @param time 时间
 */
export const addUserTime = (id: string, time: number) => {
  if (id in userTime.value) {
    userTime.value[id as keyof typeof userTime.value] += time;
  }
  const obj = musicList.value.find((item) => item.id === id);
  obj ? (obj.time! += time) : null;
};

/**
 * 是否允许播放音频
 */
export const canPlayFn = (item: MusicItem, type='load') => {
  // 当前在播放且播放的音频是当前点击的音频，且还没播放完毕，则不重新初始化，继续播放
  if (
    type === 'load' && item.audioUrl === nowPlay.value.audioUrl &&
    !(Math.abs(duration.value - currentTime.value) <= 1)
  )
    return false;

  // 免费音乐允许播放
  if (item?.type === 0) return true;

  // 如果剩余时长为空，不允许播放
  if (
    nowPlay.value.hasOwnProperty("time") &&
    (nowPlay.value?.time ?? 0) <= 0
  ) {
    modelList.value.unshift(
      "当前歌曲可听部分已结束，请重新购买或选择其他音频。"
    );
    return false;
  }
};
