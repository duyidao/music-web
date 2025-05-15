import { MusicItem } from "../types/music.ts";
import { nowPlay, stop } from "./music.ts";
import { duration, currentTime, order, nextSong } from "./contorl.ts";
import { musicList, modelList } from "./data.ts";

export const userTime = ref({
  Bones: 360,
  Demons: 15,
  Brids: 7800,
  "Bad Liar": 20,
  "Season in the Sun": 0,
  Shots: 0,
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

export const timeout = ref<any>(null);
export const timetry = ref<any>(null);
/**
 * 是否允许播放音频
 */
export const canPlayFn = (item: MusicItem, type = "load") => {
  // 当前在播放且播放的音频是当前点击的音频，且还没播放完毕，则不重新初始化，继续播放
  if (
    type === "load" &&
    item.audioUrl === nowPlay.value.audioUrl &&
    !(Math.abs(duration.value - currentTime.value) <= 1)
  )
    return false;
  
    // 允许试听音频
  if (item?.type === 1 && item?.time! <= 0) {
    timetry.value = setTimeout(() => {
      modelList.value.unshift("当前歌曲试听已结束。即将播放下一首歌。");
      stop();
      timeout.value = setTimeout(() => {
        nextSong[order.value]();
      }, 3000);
    }, 10000);
    return true;
  }

  // 如果剩余时长为空，不允许播放
  if (item.hasOwnProperty("time") && (item?.time ?? 0) <= 0) {
    modelList.value.unshift(
      "当前歌曲可听部分已结束，请重新购买或选择其他音频。即将播放下一首歌。"
    );
    timeout.value = setTimeout(() => {
      nextSong[order.value]();
    }, 3000);
    return false;
  }

  return true;
};


