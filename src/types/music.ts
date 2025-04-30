// 当前播放的音乐歌词类型
export interface LrcListType {
  text: string;
  time: number;
}

// 定义音乐对象类型
export interface MusicItem {
  id: string;
  title: string;
  audioUrl: string;
  lyric: string;
  logo: string;
  time?: number;
}

export enum OrderType {
  Sequence = 'SEQUENCE',
  Random = 'RANDOM',
  Single = 'SINGLE',
}
