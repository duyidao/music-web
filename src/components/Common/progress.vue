<script setup lang="ts">
const props = defineProps<{
  callback: (value: number) => void,
  progress: number
}>()

const isDragging = ref(false)
// 开始拖拽
const startDrag = (e) => {
  e.preventDefault()
  isDragging.value = true
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('touchmove', handleDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchend', stopDrag)
}

// 处理拖拽
function handleDrag(e) {
  if (!isDragging.value) return
  updateProgress(e)
}

// 停止拖拽
function stopDrag() {
  isDragging.value = false
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('touchmove', handleDrag)
}

const sliderRef = ref(null)

// 更新进度值
function updateProgress(e) {
  const slider = sliderRef.value
  const rect = slider.getBoundingClientRect()
  const clientX = e.clientX ?? e.touches?.[0]?.clientX

  let rawValue = (clientX - rect.left) / rect.width
  rawValue = Math.max(0, Math.min(1, rawValue))
  props.callback(Number(rawValue.toFixed(2)))
}
// 点击轨道跳转
function handleTrackClick(e) {
  updateProgress(e)
}
</script>

<template>
  <div class="progress">
    <div class="custom-slider"
      ref="sliderRef">
      <div class="track"
        @click="handleTrackClick">
        <div class="fill"
          :style="{ width: progress * 100 + '%' }"></div>
      </div>
      <div class="thumb"
        :style="{ left: progress * 100 + '%' }"
        @mousedown="startDrag"
        @touchstart="startDrag"></div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  width: 100%;
}
/* CSS样式 */
.custom-slider {
  position: relative;
  width: 100%;
  height: 20px;
}

.track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  transform: translateY(-50%);
  cursor: pointer;
}

.fill {
  position: absolute;
  height: 100%;
  background: #4CAF50;
  border-radius: 2px;
  transition: width 0.1s;
}

.thumb {
  position: absolute;
  top: 50%;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s;
}

.thumb:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.2);
}
</style>