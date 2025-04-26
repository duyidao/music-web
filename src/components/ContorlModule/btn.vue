<script setup lang="ts">
import { play, pause, stop, isPlaying } from '@/store/music.ts'
import { prev, next } from '@/store/contorl.ts'

</script>

<template>
  <div class="control-btn">
    <span class="iconfont icon-prev"
      @click="prev()"
      title="上一首"></span>
    <span v-if="!isPlaying"
      class="iconfont icon-bofang"
      @click="play()"
      title="播放"></span>
    <span v-else
      class="iconfont icon-zanting"
      @click="pause()"
      title="暂停"></span>
    <span class="iconfont icon-tingzhi"
      @click="stop()"
      title="停止"></span>
    <span class="iconfont icon-next"
      @click="next()"
      title="下一首"></span>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
}
</style>