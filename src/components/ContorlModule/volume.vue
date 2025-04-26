<script setup lang="ts">
import Progress from '@comp/Common/progress.vue'
import { setVolume } from '@/store/music.ts'
import { volume } from '@/store/contorl.ts'

const isMuted = computed<boolean>(() => volume.value === 0)
const previousVolume = ref(0.5) // 保存静音前音量

// 初始化设置默认音量
setVolume(volume.value)

// 音量变化处理
const handleVolumeChange = (newVolume: number) => {
  volume.value = newVolume
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

  setVolume(volume.value)
}

// 监听外部音量变化（如键盘快捷键）
watch(() => volume.value, (newVal: number) => {
  setVolume(newVal)
})

const isOver = ref(false)
const mouseenterFn = () => {
  isOver.value = true
}
const mouseleaveFn = () => {
  isOver.value = false
}
</script>

<template>
  <div class="contoel-volume"
    @mouseenter="mouseenterFn"
    @mouseleave="mouseleaveFn">
    <span class="iconfont"
      :class="{ 'icon-jingyin': isMuted, 'icon-yinliang': !isMuted }"
      @click.stop="toggleMute"></span>

    <div class="contoel-volume__model"
      :class="{ active: isOver }">
      <Progress :progress="volume"
        :callback="handleVolumeChange" />
      <span class="volume-percent">
        {{ (volume * 100).toFixed(0) }}%
      </span>
    </div>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
}
</style>