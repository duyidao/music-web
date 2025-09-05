import type { MusicItem } from '@/types/music.ts'
import { playIndex } from './contorl.ts'
import { taskMap, pendingQueue, processQueue } from '@/utils/task.ts'
import musicData from '@/utils/data.ts'

// 状态管理
export const musicList = ref<MusicItem[]>([])
export const modelList = ref<string[]>([])

export const backgroundImage = ref('') // 背景图片
// 当前选择要播放的音乐
export const currentMusic = computed(() => {
  return musicList.value[playIndex.value]
})

// 格式化歌词
export const lrcList = computed(() => {
  if (!!musicList.value.length) {
    backgroundImage.value = `url(${
      musicList.value[playIndex.value]!.logo
    }) no-repeat 100% / cover`
  }
  return formatLyrics(currentMusic.value?.lyric)
})

// 歌词格式化工具函数
const formatLyrics = (lyric?: string) => {
  if (!lyric) return [{ text: '暂无歌词' }]

  return lyric.split('\n').map((item) => {
    if (!item) return { text: '' }

    const [timeStr, text] = item.split(']')
    const [min, sec] = timeStr.replace('[', '').split(':').map(Number)

    return {
      time: (min || 0) * 60 + (sec || 0),
      text: text || '',
    }
  })
}

// 初始化音乐数据
export const loadMusicData = async () => {
  try {
    const jsModules = import.meta.glob('@/assets/lrc/*.js', { eager: true })
    musicList.value = musicData.map((item: {audioUrl: string, logo: string}) => {
      const baseName = item.audioUrl.replace(/^.*music\//, '').replace(/\.mp3$/, '')

      let obj: MusicItem = {
        id: baseName,
        title: formatTitle(baseName),
        audioUrl: item.audioUrl,
        lyric:
          (jsModules[`/src/assets/lrc/${baseName}.js`] as { default: string })
            ?.default || '',
        logo: item.logo,
      }
      return obj
    })
    initMusicTasks()
  } catch (err) {
    console.error('加载音乐数据失败:', err)
  }
}

/**
 * 初始化音乐任务
 *
 * 遍历音乐列表，并为每个音乐创建一个任务。如果任务映射（taskMap）中不存在该音乐的任务，则创建一个新任务，并将其添加到待处理队列（pendingQueue）中。
 * 最后，调用processQueue函数处理待处理队列中的任务。
 */
function initMusicTasks() {
  musicList.value.forEach((music) => {
    if (!taskMap.has(music.id)) {
      taskMap.set(music.id, {
        id: music.id,
        status: 'waiting',
        data: null,
      })
      pendingQueue.push(music.id)
    }
    processQueue()
  })
}

// 格式化标题
function formatTitle(fileName: string) {
  return fileName
    .replace(/^\d+_/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
