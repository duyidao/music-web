import { musicList } from "./data_副本.ts";
import { loadAudio, playAudio } from "./music_副本.ts";
import { userTime } from "./user_副本.ts";

// 播放状态
export const playIndex = ref(0);
export const currentTime = ref(0);
export const duration = ref(0);
export const volume = ref(0.5);
export const order = ref<OrderType>("sequence");
export const isShowingModal = ref(false);

export const progress = computed(() => {
  return duration.value ? currentTime.value / duration.value : 0;
});

// 播放顺序处理
export const nextSong = {
  sequence: () => {
    playIndex.value = (playIndex.value + 1) % musicList.value.length;
    loadAndPlay();
  },
  random: () => {
    playIndex.value = getRandomIndex(musicList.value.length, playIndex.value);
    loadAndPlay();
  },
  single: () => {
    loadAndPlay();
  },
};

// 加载并播放当前歌曲
export async function loadAndPlay () {
  const success = await loadAudio(musicList.value[playIndex.value]);
  if (success) {
    playAudio();
  }
};

// 上一首/下一首
export const prev = () => {
  playIndex.value =
    (playIndex.value - 1 + musicList.value.length) % musicList.value.length;
  loadAndPlay();
};

export const next = () => {
  nextSong[order.value]();
};

// 随机索引生成
export const getRandomIndex = (length: number, currentIndex: number) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === currentIndex && length > 1);
  return newIndex;
};
