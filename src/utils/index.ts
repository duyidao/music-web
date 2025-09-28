/**
 * @description 格式化时间
 * @param {number} seconds 时间戳
 * @return {string} 格式化后的时间字符串
 */
export function formatDuration(seconds: number) {
  // 处理非数字输入
  if (isNaN(seconds)) return '00:00'

  // 处理负数
  const absSeconds = Math.abs(Math.floor(seconds))

  const hours = Math.floor(absSeconds / 3600)
  const mins = Math.floor((absSeconds % 3600) / 60)
  const secs = absSeconds % 60

  const parts = []

  if (hours > 0) {
    parts.push(hours.toString().padStart(2, '0'))
  }
  parts.push(mins.toString().padStart(2, '0'))
  parts.push(secs.toString().padStart(2, '0'))

  return parts.join(':')
}

// 随机索引生成
export const getRandomIndex = (length: number, currentIndex: number) => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * length)
  } while (newIndex === currentIndex && length > 1)
  return newIndex
}

export const ratio = ref<number>(window.innerWidth / 750)
export const screenWidth = ref<number>(window.innerWidth)
export const pxToRem = () => {
  ratio.value = window.innerWidth / 750
  screenWidth.value = window.innerWidth
}
pxToRem()

export const debounce = (fn: any, delay: number = 500) => {
  let timer: NodeJS.Timeout
  return function (...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}

// 歌词格式化工具函数
export const formatLyrics = (lyric?: string) => {
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
