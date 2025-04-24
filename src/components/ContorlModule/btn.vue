<script setup lang="ts">
import { play, pause, stop, isPlaying } from '@/store/music.ts'
import { prev, next } from '@/store/contorl.ts'

</script>

<template>
  <div class="control-btn">
    <span class="iconfont icon-prev" @click="prev()"></span>
    <span v-if="!isPlaying" class="iconfont icon-bofang" @click="play()"></span>
    <span v-else class="iconfont icon-zanting" @click="pause()"></span>
    <span class="iconfont icon-tingzhi" @click="stop()"></span>
    <span class="iconfont icon-next" @click="next()"></span>
  </div>
</template>

<style scoped>

</style>