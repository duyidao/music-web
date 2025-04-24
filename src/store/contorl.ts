import { musicList } from './data.ts';
import { load } from './music.ts';

export const volume = ref<number>(0.5) // 默认音量 50%
export const playIndex = ref<number>(0); // 当前播放歌曲的索引
export const currentTime = ref<number>(0); // 当前播放进度
export const duration = ref<number>(0); // 音频时长

export const progress = computed<ComputedRef<number>>(() => {
  return duration.value !== 0 ? currentTime.value / duration.value : 0;
})

export const prev = () => {
  if (playIndex.value === 0) {
    playIndex.value = musicList.length - 1;
  } else {
    playIndex.value--;
  }
  load()
}

export const next = () => {
  if (playIndex.value === musicList.length - 1) {
    playIndex.value = 0;
  } else {
    playIndex.value++;
  }
  load()
}