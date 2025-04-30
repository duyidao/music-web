<script setup lang="ts">
import ContorlModule from '@comp/ContorlModule/index.vue'
import Music from '@comp/Music.vue'
import Model from '@comp/Common/model.vue'
import { loadMusicData } from '@/store/data.ts'
import { destroy } from '@/store/music.ts'
import { pxToRem } from '@/utils/index.ts';

onMounted(() => {
  loadMusicData()
  window.addEventListener('resize', pxToRem);
})

onUnmounted(() => {
  destroy()
  window.removeEventListener('resize', pxToRem);
})
</script>

<template>
  <div class="container">
    <Music />
    <ContorlModule />
    <Model />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .music {
    width: 100%;
    height: calc(100vh - 120px);
  }

  .contorl-btn {
    width: 100%;
  }
}

@media screen and (max-width: 920px) {
  .container {
    .music {
      height: calc(100vh - 7.5rem);
    }
  }
}
</style>