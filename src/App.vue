<script lang="ts" setup>
import ControlModule from '@comp/ContorlModule/index.vue'
import Music from '@comp/Music.vue'
import MusicList from '@comp/MusicList/index.vue'
import { loadMusicData, backgroundImage } from '@/store/data.ts'
import { destroy } from '@/store/music.ts'
import { pxToRem } from '@/utils/index.ts'

onMounted(() => {
  loadMusicData()
  window.addEventListener('resize', pxToRem)
})

onUnmounted(() => {
  destroy()
  window.removeEventListener('resize', pxToRem)
})

const bgPlayerRef = ref()
watch(
  () => backgroundImage.value,
  (newVal) => {
    if (!newVal) return
    nextTick(() => (bgPlayerRef.value.style.backgroundImage = newVal))
  },
  { deep: true, immediate: true }
)
</script>

<template>
  <div class="container">
    <div class="bg_player_mask"></div>
    <div ref="bgPlayerRef" class="bg_player"></div>
    <div class="mod-player">
      <div class="mod-player-music">
        <Music />
        <ControlModule />
      </div>

      <!--音乐列表-->
      <MusicList />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .mod-player {
    display: flex;
    position: relative;
    z-index: 5;

    .mod-player-music {
      flex: 1;
    }
  }

  .bg_player,
  .bg_player_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg_player {
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(35px);
    opacity: 0.7;
    transform: translateZ(0);
    background-color: rgb(255, 255, 255);
  }

  .bg_player_mask {
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 2;
  }
}
</style>
