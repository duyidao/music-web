<script lang="ts" setup>
import Progress from '@comp/Common/progress.vue'
import {setVolume} from '@/store/music.ts'
import {volume} from '@/store/contorl.ts'

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
</script>

<template>
  <div class="control-volume">
    <a :class="{ 'btn-jingyin': isMuted, 'btn-yinliang': !isMuted }" @click.stop="toggleMute"></a>

    <Progress :callback="handleVolumeChange" :progress="volume"/>
  </div>
</template>

<style scoped>
a {
  display: block;
  width: 40px;
  height: 21px;
  background-image: url(../../assets/images/bg.png);
  color: hsla(0, 0%, 88.2%, .8);
  opacity: .8;
  cursor: pointer;
  margin-right: 6px;

  &:hover {
    opacity: 1;
  }
}

.control-volume {
  display: flex;
  width: 100%;
  .btn-yinliang {
    background-position: 0 -144px;
  }
  .btn-jingyin {
    background-position: 0 -182px;
  }
}
</style>