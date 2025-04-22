<script setup lang="ts">
import ContorlBtn from '@/components/ContorlBtn.vue'
import Music from '@/components/Music.vue'
import { loadMusicData } from '@/store/data.ts'

onMounted(() => {
  loadMusicData()
})
</script>

<template>
  <div class="container">
    <Music />
    <ContorlBtn />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .music {
    height: 80%;
    width: 100%;
  }

  .contorl-btn {
    height: 20%;
    width: 100%;
  }
}
</style>