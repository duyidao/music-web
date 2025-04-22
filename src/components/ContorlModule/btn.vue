<script setup lang="ts">
import { play, pause, stop, isPlaying } from '@/store/music.ts'

</script>

<template>
  <div>
    <span class="iconfont icon-icon-1" @click="stop()"></span>
    <span v-if="!isPlaying" class="iconfont icon-bofang" @click="play()"></span>
    <span v-else class="iconfont icon-zanting" @click="pause()"></span>
    <span class="iconfont icon-tingzhi" @click="stop()"></span>
    <span class="iconfont icon-icon-" @click="stop()"></span>
  </div>
</template>

<style scoped>

</style>