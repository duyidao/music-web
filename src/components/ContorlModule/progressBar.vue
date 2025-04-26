<script setup lang="ts">
import Progress from '@comp/Common/progress.vue'
import { currentTime, duration, progress } from '@/store/contorl.ts'
import { seek } from '@/store/music.ts'
import { currentMusic } from '@/store/data.ts'
import { formatDuration } from '@/utils/index.ts'
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
      <img :src="currentMusic?.logo || baseImg"
        alt="音乐logo">
    </div>
    <div class="progress-bar__info">
      <p class="name">{{ currentMusic?.title || '暂无音乐' }}</p>
      <div class="progress-bar__info__progress">
        <Progress :progress="progress"
          :callback="callback" />
        <p class="time">
          <span>{{ currentTimeText }}</span> <i>/</i> <span>{{ durationText }}</span>
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

@media screen and (max-width: 920px) {
  .progress-bar {

    &__logo {
      width: 3.125rem;
      height: 3.125rem;
      margin-right: .9375rem;
    }

    &__info {
      p.name {
        font-size: 1rem;
      }

      &__progress {
        margin-top: .625rem;
        font-size: .75rem;

        :deep(.progress) {
          margin-right: 1rem;
        }

        .time {
          i {
            margin: 0 .3125rem;
          }
        }
      }
    }
  }
}
</style>