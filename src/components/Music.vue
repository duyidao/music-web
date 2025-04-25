<script setup lang="ts">
import { init } from '@/store/music.ts'
import { currentMusic, lrcList } from '@/store/data.ts'

onMounted(() => {
  init()
})
</script>

<template>
  <div class="music">
    <div class="music-logo">
      <img :src="currentMusic?.logo" alt="音乐logo" />
    </div>
    <div class="music-lrc">
      <div class="music-lrc-content" v-for="item in lrcList">{{ item.time }}{{ item.text }}</div>
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
      aspect-ratio: 1/1;  /* 宽高比强制为 1:1（正方形） */
      object-fit: contain;  /* 控制图片填充方式（cover 裁剪，contain 包含） */
      border-radius: 50%;
    }
  }

  .music-lrc {
    flex: 1;
    height: 100%;
    overflow: scroll;
  }
}
</style>