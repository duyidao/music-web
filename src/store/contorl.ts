import { musicList } from "./data.ts";
import { load } from "./music.ts";
import { OrderType } from '@/types/music.ts'
import { getRandomIndex } from '@/utils/index.ts'

export const volume = ref<number>(0.5); // 默认音量 50%
export const playIndex = ref<number>(0); // 当前播放歌曲的索引
export const currentTime = ref<number>(0); // 当前播放进度
export const duration = ref<number>(0); // 音频时长
export const order = ref<OrderType>(OrderType.Sequence); // 播放顺序
export const show = ref<boolean>(false); // 是否显示购买弹窗

export const progress = computed<number>(() => {
  return duration.value !== 0 ? currentTime.value / duration.value : 0;
});

export const prev = () => {
  if (playIndex.value === 0) {
    playIndex.value = musicList.value.length - 1;
  } else {
    playIndex.value--;
  }
  load();
};

export const next = () => {
  if (playIndex.value === musicList.value.length - 1) {
    playIndex.value = 0;
  } else {
    playIndex.value++;
  }
  load();
};



export const nextSong = {
  SEQUENCE: () => next(),
  RANDOM: () => {
    playIndex.value = getRandomIndex(musicList.value.length - 1, playIndex.value);
    load()
  },
  SINGLE: () => {
    load();
  }
}