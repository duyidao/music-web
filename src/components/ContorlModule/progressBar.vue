<script lang="ts" setup>
import Progress from '@comp/Common/progress.vue'
import {currentTime, duration, progress} from '@/store/contorl.ts'
import {seek} from '@/store/music.ts'
import {currentMusic} from '@/store/data.ts'
import {formatDuration} from '@/utils/index.ts'
import baseImg from '@/assets/images/base/music.jpg'

const callback = (num: number) => {
  currentTime.value = num * duration.value
  seek(currentTime.value)
}

const currentTimeText = computed(() => {
  return formatDuration(currentTime.value)
})

const durationText = computed(() => {
  return formatDuration(duration.value)
})
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__logo">
      <img :src="currentMusic?.logo || baseImg" alt="音乐logo">
    </div>
    <div class="progress-bar__info">
      <div class="progress-bar__info__content">
        <p class="name">{{ currentMusic?.title || '暂无音乐' }}</p>
        <p class="time">
          <span>{{ currentTimeText }}</span> <i>/</i> <span>{{ durationText }}</span>
        </p>
      </div>
      <Progress :callback="callback" :progress="progress"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 25px;

  &__logo {
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    color: #fff;

    p.name {
      font-size: 16px;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      font-size: 12px;
      width: 100%;

      :deep(.progress) {
        margin-right: 16px;
      }

      .time {
        display: flex;

        i {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>