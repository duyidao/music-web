<script setup lang="ts">
import { init } from '@/store/music.ts'
import { currentMusic, lrcList } from '@/store/data.ts'
import { currentTime } from '@/store/contorl.ts'
import baseImg from '@/assets/images/base/music.jpg'

onMounted(() => {
  init()
})

const lrcActive = computed(() => {
  return lrcList.value.find((item: any) => {
    return item.time >= currentTime.value
  })
})

const musicLrc = ref()
const musicLrcContent = ref()
let musicLrcHeight = 0
let liHeight = 40
let maxOffsetTop = 0

watch(() => lrcList.value, () => {
  musicLrcHeight = musicLrc.value.clientHeight; // 获取容器的高度
  maxOffsetTop = (lrcList.value.length - 1) * liHeight - musicLrcHeight + liHeight / 2; // 计算最大偏移量
})

watch(() => currentTime.value, () => {
  const index = lrcList.value.findIndex((item: any) => {
    return item.time >= currentTime.value
  })

  let offsetTop = index * liHeight + liHeight / 2 - musicLrcHeight / 2; // 计算偏移量
  if (offsetTop < 0) {
    offsetTop = 0
  }
  if (offsetTop > maxOffsetTop) {
    offsetTop = maxOffsetTop
  }

  musicLrcContent.value.style.transform = `translateY(-${offsetTop}px)` // 设置偏移量
})
</script>

<template>
  <div class="music">
    <div class="music-logo">
      <img :src="currentMusic?.logo || baseImg"
        alt="音乐logo" />
    </div>
    <div class="music-lrc"
      ref="musicLrc">
      <ul class="music-lrc-content"
        ref="musicLrcContent">
        <li v-for="item in lrcList"
          :class="{ active: (item as any)?.time === (lrcActive as any)?.time }">
          {{ (item as any)?.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music {
  display: flex;
  align-items: center;
  justify-content: center;


  .music-logo {
    width: 38%;
    padding: 0 30px 0 100px;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      /* 宽高比强制为 1:1（正方形） */
      object-fit: contain;
      /* 控制图片填充方式（cover 裁剪，contain 包含） */
      border-radius: 50%;
    }
  }

  .music-lrc {
    flex: 1;
    height: 100%;
    overflow: scroll;

    ul {
      font-size: 16px;
      text-align: center;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;

        &.active {
          transform: scale(1.3);
          color: green;
        }
      }
    }
  }
}
</style>