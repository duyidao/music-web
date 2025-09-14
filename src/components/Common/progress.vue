<script lang="ts" setup>
const props = defineProps<{
  callback: (value: number) => void,
  progress: number
}>()

const isDragging = ref(false)
// 开始拖拽
const startDrag = (e: MouseEvent | TouchEvent) => {
  e.preventDefault()
  isDragging.value = true
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('touchmove', handleDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchend', stopDrag)
}

// 处理拖拽
function handleDrag(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return
  updateProgress(e)
}

// 停止拖拽
function stopDrag() {
  isDragging.value = false
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('touchmove', handleDrag)
}

// 修复找不到 'HTMLAttributes' 的问题，将类型改为 'HTMLDivElement'，因为 sliderRef 引用的是 div 元素
const sliderRef = ref<HTMLDivElement | null>(null)

// 更新进度值
function updateProgress(e: MouseEvent | TouchEvent) {
  const slider = sliderRef.value
  const rect = slider!.getBoundingClientRect()
  const clientX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches?.[0]?.clientX

  let rawValue = (clientX - rect.left) / rect.width
  rawValue = Math.max(0, Math.min(1, rawValue))
  props.callback(Number(rawValue.toFixed(2)))
}

// 点击轨道跳转
function handleTrackClick(e: any) {
  updateProgress(e)
}
</script>

<template>
  <div class="progress">
    <div ref="sliderRef" class="custom-slider">
      <div class="track" @click="handleTrackClick">
        <div :style="{ width: progress * 100 + '%' }" class="fill"></div>
      </div>
      <div :style="{ left: progress * 100 + '%' }" class="thumb" @mousedown="startDrag" @touchstart="startDrag"></div>
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
  height: 3px;
  background: hsla(0, 0%, 100%, .2);
  border-radius: 2px;
  transform: translateY(-50%);
  cursor: pointer;
}

.fill {
  position: absolute;
  height: 100%;
  background: #fff;
  border-radius: 1px;
  transition: width 0.1s;
}

.thumb {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
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