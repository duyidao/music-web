<script setup lang="ts">
import { currentTime, duration, progress } from '@/store/contorl.ts'
import { seek } from '@/store/music.ts'

const handleProgressChange = e => {
  console.log(e, 'e', e.target.value)
  currentTime.value = e.target.value * duration.value
  seek(currentTime.value)
}
</script>

<template>
  <div class="progress">
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        :value="progress"
        @input="handleProgressChange"
        class="volume-slider"
      >
      <p>
        <span>{{ currentTime.toFixed(0) }}</span> / <span>{{ duration.toFixed(0) }}</span>
      </p>
  </div>
</template>

<style scoped>

</style>