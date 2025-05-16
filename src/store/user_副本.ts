import { musicList, modelList } from "./data_副本.ts";
import { audioState, stopAudio } from "./music_副本.ts";


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

// 设置主题色
export const setThemeColor = (color: string = "#4fa273") => {
  userColor.value = color;
  document.documentElement.style.setProperty("--base-color", color);
};

// 添加听歌时间
export const addListeningTime = (songId: string, seconds: number) => {
  if (songId in userTime.value) {
    userTime.value[songId] += seconds;
  }

  const song = musicList.value.find((item) => item.id === songId);
  if (song) {
    song.time = (song.time || 0) + seconds;
  }
};

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
    modelList.value.unshift("试听即将结束，10秒后播放下一首");
    setTimeout(() => {
      stopAudio();
      nextSong[order.value]();
    }, 10000);
    return true;
  }

  // 无剩余时长
  if (song.time !== undefined && song.time <= 0) {
    modelList.value.unshift("可听部分已结束，请购买或选择其他歌曲");
    setTimeout(() => nextSong[order.value](), 3000);
    return false;
  }

  return true;
};
