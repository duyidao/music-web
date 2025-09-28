// 当前播放的音乐歌词类型
export interface LrcListType {
  text: string
  time: number
}

// 定义音乐对象类型
export interface MusicItem {
  id: string
  title: string
  audioUrl: string
  lyric: string
  logo: string
  time?: number
  author: string
}

// 定义播放顺序枚举类型
export enum OrderType {
  Sequence = 'SEQUENCE',
  Random = 'RANDOM',
  Single = 'SINGLE',
}

// 定义播放状态枚举类型
export type Status = 'error' | 'waiting' | 'pending'

// 定义断开连接的键类型
export type DisconnectableKeys = 'analyser' | 'gainNode' | 'source'
