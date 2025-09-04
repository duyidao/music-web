<script setup lang="ts">
import { initAudio } from '@/store/music.ts'
import { currentMusic, lrcList } from '@/store/data.ts'
import { currentTime } from '@/store/contorl.ts'
import { screenWidth, ratio } from '@/utils/index.ts'
import CanvasVisual from '@comp/CanvasVisual/index.vue'

// @ts-ignore
import ColorThief from 'colorthief'

const colorThief = new ColorThief()
// @ts-ignore
const bgColor = ref('transparent')
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
      bgColor.value = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .35)`
    } catch (err) {
      console.error('获取背景色失败:', err)
      bgColor.value = 'transparent' // 设置默认颜色
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
let liHeight = ref(screenWidth.value < 768 ? 40 * ratio.value : 40)
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

    musicLrcContent.value.style.transform = `translateY(-${offsetTop * 1}px)` // 设置偏移量
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
  <div class="music">
    <div ref="musicRef" class="music-logo">
      <CanvasVisual :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" />
    </div>
    <div class="music-lrc" :style="{ '--bg': bgColor }" ref="musicLrc">
      <ul class="music-lrc-content" ref="musicLrcContent">
        <li
          v-for="item in lrcList"
          :class="{ active: (item as any)?.time === (lrcActive as any)?.time }"
          :style="{ height: `${liHeight}px` }"
        >
          {{ (item as any)?.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music {
  position: relative;

  .music-logo {
    position: absolute;
    width: 100%;
  }

  .music-lrc {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 2;
    background-color: var(--bg);
    backdrop-filter: blur(3px);

    ul {
      font-size: 16px;
      text-align: center;
      transition: all 0.3s;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          transform: scale(1.3);
          color: var(--base-color);
          text-shadow: 0 0px 10px #fff;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .music {
    .music-logo {
      height: 100%;
      z-index: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .music {
    .music-logo {
      bottom: 0;
      left: 0;
      height: 5rem;
    }

    .music-lrc {
      width: 100%;
      height: clac(100% - 5.625rem);

      ul {
        font-size: 0.75rem;

        li {
          &.active {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
