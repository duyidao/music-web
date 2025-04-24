<script setup lang="ts">
import Progress from '@comp/Common/progress.vue'
import { currentTime, duration, progress } from '@/store/contorl.ts'
import { seek } from '@/store/music.ts'
import { currentMusic } from '@/store/data.ts'

const callback = (num: number) => {
  currentTime.value = num * duration.value
  seek(currentTime.value)
}
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__logo">
      <img :src="currentMusic?.logo"
        alt="">
    </div>
    <div class="progress-bar__info">
      <p class="name">{{ currentMusic?.title }}</p>
      <div class="progress-bar__info__progress">
        <Progress :progress="progress"
          :callback="callback" />
        <p class="time">
          <span>{{ currentTime.toFixed(0) }}</span> <i>/</i> <span>{{ duration.toFixed(0) }}</span>
        </p>
      </div>
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

  &__logo {
    width: 50px;
    height: 50px;
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

    p.name {
      font-size: 16px;
    }

    &__progress {
      display: flex;
      align-items: center;
      margin-top: 10px;
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