<script lang="ts" setup>
import { initAudio } from '@/store/music.ts'
import { currentMusic, lrcList } from '@/store/data.ts'
import { currentTime } from '@/store/contorl.ts'
import { ratio, screenWidth } from '@/utils/index.ts'
import { setThemeColor } from '@/store/user.ts'
import CanvasVisual from '@comp/CanvasVisual/index.vue'
import AuthorList from '@comp/AuthorList/index.vue'
// @ts-ignore
import ColorThief from 'colorthief'

const colorThief = new ColorThief()
watch(
  () => currentMusic.value,
  async (newVal: any) => {
    if (!newVal && !newVal.logo) return

    try {
      // 1. 创建图片对象并加载
      const img = new Image()
      img.crossOrigin = 'Anonymous' // 处理跨域问题
      img.src = newVal.logo

      // 2. 等待图片加载完成
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
      })

      // 3. 获取颜色
      const colors = await colorThief.getColor(img, 5)
      setThemeColor(`rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
    } catch (err) {
      console.error('获取背景色失败:', err)
      setThemeColor()
    }
  },
  { deep: true }
)

// @ts-ignore
onMounted(() => {
  initAudio()
})

// @ts-ignore
const lrcActive = computed(() => {
  return lrcList.value.find((item: any) => {
    return item.time >= currentTime.value
  })
})
// @ts-ignore

const musicLrc = ref()
// @ts-ignore
const musicLrcContent = ref()
let musicLrcHeight = 0
// @ts-ignore
let liHeight = ref<number>(screenWidth.value < 768 ? 40 * ratio.value : 40)
let maxOffsetTop = 0

// @ts-ignore
watch(
  () => lrcList.value,
  () => {
    musicLrcHeight = musicLrc.value.clientHeight // 获取容器的高度
    maxOffsetTop =
      (lrcList.value.length - 1) * liHeight.value -
      musicLrcHeight +
      liHeight.value / 2 // 计算最大偏移量
  }
)

// @ts-ignore
watch(
  () => screenWidth.value,
  (newVal: number) => {
    liHeight.value = newVal < 768 ? 40 * ratio.value : 40
  }
)

// @ts-ignore
watch(
  () => currentTime.value,
  (newVal: number) => {
    const index = lrcList.value.findIndex((item: any) => {
      return item.time >= newVal
    })

    let offsetTop =
      index * liHeight.value + liHeight.value / 2 - musicLrcHeight / 2 // 计算偏移量
    if (offsetTop < 0) {
      offsetTop = 0
    }
    if (offsetTop > maxOffsetTop) {
      offsetTop = maxOffsetTop
    }

    musicLrcContent.value.style.transform = `translateY(-${offsetTop}px)` // 设置偏移量
  }
)

// @ts-ignore
const musicRef = ref()
const canvasWidth = ref(0)
const canvasHeight = ref(0)
onMounted(() => {
  canvasWidth.value = musicRef.value.clientWidth
  canvasHeight.value = musicRef.value.clientHeight
})
</script>

<template>
  <!--音乐播放相关-->
  <div class="music-play">
    <div ref="musicRef" class="music-logo">
      <CanvasVisual :canvasHeight="canvasHeight" :canvasWidth="canvasWidth" />
    </div>
    <div ref="musicLrc" class="music-lrc">
      <ul ref="musicLrcContent" class="music-lrc-content">
        <li
          v-for="item in lrcList"
          :class="{ active: (item as any)?.time === (lrcActive as any)?.time }"
          :style="{ height: `${liHeight}px` }"
        >
          {{ (item as any)?.text }}
        </li>
      </ul>
    </div>
    <AuthorList />
  </div>
</template>

<style lang="less" scoped>
.music-play {
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);

  .music-logo {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .music-lrc {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 2;
    backdrop-filter: blur(3px);

    ul {
      font-size: 16px;
      text-align: center;
      transition: all 0.3s;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #bbb;

        &.active {
          transform: scale(1.3);
          color: var(--base-color);
        }
      }
    }
  }
}
</style>
