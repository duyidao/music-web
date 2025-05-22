// 当前播放的音乐歌词类型
export interface LrcListType {
  text: string;
  time: number;
}

enum MusicType {
  免费试听 = 1,
  免费音乐 = 0
}

// 定义音乐对象类型
export interface MusicItem {
  id: string;
  title: string;
  audioUrl: string;
  lyric: string;
  logo: string;
  time?: number;
  type?: MusicType;
}

export enum OrderType {
  SEQUENCE = 'SEQUENCE',
  RANDOM = 'RANDOM',
  SINGLE = 'SINGLE',
}
