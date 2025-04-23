<script setup lang="ts">
import Progress from '@comp/Common/progress.vue'
import { setVolume } from '@/store/music.ts'
import { volume } from '@/store/contorl.ts'

const isMuted = ref(false)
const previousVolume = ref(0.8) // 保存静音前音量

// 初始化设置默认音量
setVolume(volume.value)

// 音量变化处理
const handleVolumeChange = (newVolume: number) => {
  console.log('newVolume', newVolume);
  volume.value = newVolume
  isMuted.value = newVolume === 0
  setVolume(newVolume)
}

// 静音切换功能
const toggleMute = () => {
  if (isMuted.value) {
    // 取消静音恢复先前音量
    volume.value = previousVolume.value
  } else {
    // 保存当前音量并设为0
    previousVolume.value = volume.value
    volume.value = 0
  }
  
  isMuted.value = !isMuted.value
  setVolume(volume.value)
}

// 监听外部音量变化（如键盘快捷键）
watch(volume, (newVal) => {
  setVolume(newVal)
})
</script>

<template>
  <div class="contoel-btn">
    <button @click="toggleMute">
        {{ isMuted ? '🔇' : '🔊' }}
      </button>
      <Progress :progress="volume" :callback="handleVolumeChange" />

      <span class="volume-percent">
        {{ (volume * 100).toFixed(0) }}%
      </span>
  </div>
</template>

<style scoped>

</style>