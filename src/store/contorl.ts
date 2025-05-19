import { musicList } from "./data.ts";
import { loadAudio, playAudio, audioState } from "./music.ts";
import { clearTimeoutFn, canPlay } from "./user.ts";
import { getRandomIndex, debounce } from "@/utils/index.ts";
import { createCancelableTask } from "@/utils/task.ts";
import { OrderType } from "@/types/music.ts";

// 播放状态
export const playIndex = ref(0);
export const currentTime = ref(0);
export const duration = ref(0);
export const volume = ref(0.5);
export const order = ref<OrderType>("SEQUENCE");
export const isShowingModal = ref(false);

export const progress = computed(() => {
  return duration.value ? currentTime.value / duration.value : 0;
});

/**
 * 根据音频状态选择加载或播放音频
 */
export const loadOrPlayAudio = () => {
  if (audioState.value.buffer) {
    if (!canPlay(musicList.value[playIndex.value], 'play')) return false;
    playAudio();
  } else {
    if (!canPlay(musicList.value[playIndex.value])) return false;
    loadAndPlay();
  }
};

/**
 * 根据文档隐藏状态设置定时器或动画帧
 *
 * @param backgroundIntervalId 背景定时器ID
 * @param animationFrameId 动画帧ID
 * @param fn 回调函数
 */
export const documentHidden = (backgroundIntervalId: number, animationFrameId: number, fn: any) => {
  if (document.hidden) {
    backgroundIntervalId = setInterval(fn, 1000);
  } else {
    const track = () => {
      fn();
      animationFrameId = requestAnimationFrame(track);
    };
    animationFrameId = requestAnimationFrame(track);
  }
};

const debounceLoadAndPlay = debounce(loadAndPlay, 500);

// 播放顺序处理
export const nextSong = {
  sequence: () => {
    playIndex.value = (playIndex.value + 1) % musicList.value.length;
    debounceLoadAndPlay();
  },
  random: () => {
    playIndex.value = getRandomIndex(musicList.value.length, playIndex.value);
    debounceLoadAndPlay();
  },
  single: () => {
    debounceLoadAndPlay();
  },
};

let cancelFn = () => {};

// 加载并播放当前歌曲
export async function loadAndPlay() {
  const { run, cancel } = createCancelableTask(() =>
    loadAudio(musicList.value[playIndex.value])
  );
  clearTimeoutFn(); // 清除定时器
  cancelFn = cancel;
  run().then(() => {
    playAudio();
  });
}

// 上一首/下一首
export const prev = () => {
  playIndex.value =
    (playIndex.value - 1 + musicList.value.length) % musicList.value.length;
  cancelFn();
  debounceLoadAndPlay();
};

export const next = () => {
  cancelFn();
  nextSong[order.value]();
};
