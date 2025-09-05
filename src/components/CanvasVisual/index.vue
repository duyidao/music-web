<script setup lang="ts">
import { screenWidth, ratio } from '@/utils/index.ts'
import { audioState } from '@/store/music.ts'
import { userColor } from '@/store/user.ts'

defineProps({
  canvasHeight: {
    type: Number,
    default: 150,
  },
  canvasWidth: {
    type: Number,
    default: screenWidth.value * ratio.value,
  },
})

const canvasRef = ref()
const con = ref()
const baseHeight = 1000

onMounted(() => {
  con.value = canvasRef.value?.getContext('2d')
})

watch(
  () => audioState.value.analyser,
  (newVal) => {
    if (!newVal || !newVal.frequencyBinCount) return
    let dataArray: Uint8Array = new Uint8Array(newVal!.frequencyBinCount)
    ;(function draw() {
      // 动画帧，按帧绘制canvas
      requestAnimationFrame(draw)
      if (!newVal || !canvasRef.value || !dataArray) return
      // 清空画布
      const { width, height } = canvasRef.value
      con.value.clearRect(0, 0, width, height)
      // 让分析器节点分析出数据到数组中
      newVal.getByteFrequencyData(dataArray)
      // 设置canvas上下文绘制的颜色
      con.value.fillStyle = userColor.value
      // len表示获取分析到的音频数据数组长度的
      // 这里除以2.5是剔除不经常出现的高频的部分
      const len = Number((dataArray.length / 1.3).toFixed(0))
      // barWidth表示每个波形矩形的宽度 这里除以2是为了绘制对称的波形图
      const barWidth = width / len / 2
      for (let i = 0; i < len; i++) {
        // data是8位数组的每个数据，因为是一个字节，即data的值都是 <= 255
        const data = dataArray[i]
        // barHeight表示每个波形矩形的高度，值为单位长度乘canvas容器的高
        const barHeight = (data / baseHeight) * height
        // 绘制点y
        const y = height - barHeight
        // 绘制点x1
        const x1 = i * barWidth + width / 2
        // 绘制点x2
        const x2 = width / 2 - (i + 1) * barWidth
        // 绘制右半部分波形图
        con.value.fillRect(x1, y, barWidth - 2, barHeight)
        // 绘制左半部分波形图
        con.value.fillRect(x2, y, barWidth - 2, barHeight)
      }
    })()
  },
  { deep: true }
)
</script>

<template>
  <canvas ref="canvasRef" :height="canvasHeight" :width="canvasWidth"></canvas>
</template>

<style lang="less" scoped>
canvas {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
