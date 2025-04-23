<script setup lang="ts">
import Progress from '@comp/Common/progress.vue'
import { currentTime, duration, progress } from '@/store/contorl.ts'
import { seek } from '@/store/music.ts'

const callback = (num: number) => {
  currentTime.value = num * duration.value
  seek(currentTime.value)
}
</script>

<template>
  <div class="progress">
    <Progress :progress="progress" :callback="callback" />
    <p>
      <span>{{ currentTime.toFixed(0) }}</span> / <span>{{ duration.toFixed(0) }}</span>
    </p>
  </div>
</template>

<style scoped>

</style>