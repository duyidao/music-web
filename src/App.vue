<script setup lang="ts">
import ContorlModule from '@/components/ContorlModule/index.vue'
import Music from '@/components/Music.vue'
import { loadMusicData } from '@/store/data.ts'
import { destroy } from '@/store/music.ts'

onMounted(() => {
  loadMusicData()
})

onUnmounted(() => {
  destroy()
})
</script>

<template>
  <div class="container">
    <Music />
    <ContorlModule />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .music {
    height: 85%;
    width: 100%;
  }

  .contorl-btn {
    height: 20%;
    width: 100%;
  }
}
</style>