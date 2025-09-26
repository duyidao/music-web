import type { MusicItem } from '@/types/music.ts'
import { playIndex } from './contorl.ts'
import { authorList } from './author.ts'
import { taskMap, pendingQueue, processQueue } from '@/utils/task.ts'
import { formatLyrics, formatTitle } from '@/utils/index.ts'
import axios from 'axios'

// 状态管理
export const musicList = ref<MusicItem[]>([])

export const backgroundImage = ref('') // 背景图片
// 当前选择要播放的音乐
export const currentMusic = computed(() => {
  return musicList.value[playIndex.value]
})

// 格式化歌词
export const lrcList = computed(() => {
  if (!!musicList.value.length) {
    backgroundImage.value = `url("${musicList.value[playIndex.value]!.logo}")`
  }
  return formatLyrics(currentMusic.value?.lyric)
})

// 初始化音乐数据
export const loadMusicData = async () => {
  try {
    const jsModules = import.meta.glob('@/assets/lrc/*.js', { eager: true })
    const musicData = await axios.get(
      'http://music.duyidao.cn:3001/api/music/list'
    )

    musicList.value = musicData.data.files?.map(
      (item: { audioUrl: string; logo: string; author?: string }) => {
        const baseName = item.audioUrl
          .replace(/^.*music\//, '')
          .replace(/\.mp3$/, '')
          .replace(/\.aac$/, '')
          .split('/')[1]

        let obj: MusicItem = {
          id: baseName,
          title: formatTitle(baseName),
          audioUrl: 'https://music.duyidao.cn' + item.audioUrl,
          lyric:
            (jsModules[`/src/assets/lrc/${baseName}.js`] as { default: string })
              ?.default || '',
          logo: 'https://music.duyidao.cn' + item.logo,
          author: item.author,
        }
        return obj
      }
    )
    initMusicTasks()

    authorList.value = Array.from(
      new Set(musicList.value.map((item) => item.author))
    )
    console.log('authorList.value', authorList.value)
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
    if (!taskMap.value.has(music.id)) {
      taskMap.value.set(music.id, {
        id: music.id,
        status: 'waiting',
        data: null,
      })
      pendingQueue.push(music.id)
    }
    processQueue()
  })
}
