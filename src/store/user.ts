import { audioState } from './music.ts'
import { currentTime, duration } from './contorl.ts'
import type { MusicItem } from '@/types/music.ts'

export const userColor = ref('#4fa273')

/**
 * 设置主题颜色
 *
 * @param color 主题颜色，默认为 "#4fa273"
 */
export const setThemeColor = (color: string = '#31c27c') => {
  userColor.value = color
  document.documentElement.style.setProperty('--base-color', color)
}
setThemeColor()

// 检查是否可以播放
export const canPlay = (song: MusicItem, action: 'load' | 'play' = 'load') => {
  // 正在播放同一首歌且未结束
  return !(action === 'load' &&
    song.audioUrl === audioState.value.currentSong?.audioUrl &&
    Math.abs(duration.value - currentTime.value) > 1);
}
