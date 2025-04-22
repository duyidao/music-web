<script setup lang="ts">
import { currentTime, duration, progress } from '@/store/contorl.ts'

</script>

<template>
  <div>
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        :value="progress"
        @input="handleVolumeChange($event.target.valueAsNumber)"
        class="volume-slider"
      >
      <p>
        {{ currentTime.toFixed(0) }} / {{ duration.toFixed(0) }}
      </p>
  </div>
</template>

<style scoped>

</style>