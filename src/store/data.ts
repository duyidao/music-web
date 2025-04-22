import type { MusicItem } from '@/types/music.ts'


export const musicList = ref<MusicItem[]>([]);
export const currentMusic = ref<MusicItem | null>(null);

// 加载音乐数据
export const loadMusicData = async () => {
  try {
    // 同时获取 MP3 和 JS 文件
    const mp3Modules = import.meta.glob("@/assets/music/*.mp3", {
      as: "url", // 直接返回文件路径
      eager: true, // 立即加载
    });
    const jsModules = import.meta.glob("@/assets/music/*.js", { eager: true });
    const imgModules = import.meta.glob("@/assets/images/music/*.webp", { eager: true });
    // 生成音乐列表
    musicList.value = await Promise.all(
      Object.entries(mp3Modules).map(async ([mp3Path, mp3Url]) => {
        
        // 提取基础文件名 (e.g. "01_song")
        const baseName = mp3Path
          .replace(/^.*music\//, "")
          .replace(/\.mp3$/, "");

        // 查找匹配的歌词文件
        const jsPath = `/src/assets/music/${baseName}.js`;
        const imgPath = `/src/assets/images/music/${baseName}.webp`;
        
        const lyricModule = (jsModules[jsPath] as { default: string[] }) || {
          default: [],
        };
        const musicLogoModule = (imgModules[imgPath] as { default: string[] }) || {
          default: [],
        };

        return {
          id: baseName,
          title: formatTitle(baseName),
          audioUrl: mp3Url as string,
          lyric: lyricModule.default,
          logo: musicLogoModule.default,
        };
      })
    );
    console.log(musicList.value);
  } catch (err) {
    console.error("加载音乐数据失败:", err);
  }
};

// 格式化标题 (示例: "01_song" → "Song")
function formatTitle(fileName: string) {
  return fileName
    .replace(/^\d+_/, "") // 移除编号前缀
    .replace(/_/g, " ") // 下划线转空格
    .replace(/\b\w/g, (c) => c.toUpperCase()); // 首字母大写
}

export const lrcList = computed<ComputedRef<lrcListType>>(() => {
  return currentMusic.value?.lyric?.split('\n').map(item => {
    if (!item) return {};
    const timeString = item?.split(']')[0]?.replace('[', '')
    const min = Number(timeString?.split(':')?.[0]) || 0
    const second = Number(timeString?.split(':')?.[1]?.split('.')?.[0]) || 0
    const ms = Number(timeString?.split(':')?.[1]?.split('.')?.[1]) || 0
    return {
      time: min * 60 * 1000 + second * 1000 + ms * 10,
      text: item.split(']')[1]
    }
  }) || ['暂无歌词']
})
