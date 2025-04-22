export const volume = ref<number>(0.5) // 默认音量 50%
export const playIndex = ref<number>(0); // 当前播放歌曲的索引
export const currentTime = ref<number>(0); // 当前播放进度
export const duration = ref<number>(0); // 音频时长

export const progress = computed<ComputedRef<number>>(() => {
  return duration.value !== 0 ? currentTime.value / duration.value : 0;
})
