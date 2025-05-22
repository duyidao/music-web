<script setup lang="ts">
import { musicList } from '@/store/data.ts'
import type { MusicItem } from '@/types/music.ts'
import { playIndex, loadAndPlay } from '@/store/contorl.ts'
import { backgroundImage } from '@/store/data.ts'

const choseMusic = (index: number) => {
  playIndex.value = index
  loadAndPlay()
  closeBoradFn()
}

const show = defineModel('show');

const emit = defineEmits(['update:show'])

const closeBoradFn = () => {
  emit('update:show', false)
}

const boardRef = ref<HTMLDivElement>(null as unknown as HTMLDivElement);

watch(() => backgroundImage.value, (newVal) => {
  if (!newVal) return;
  nextTick(() => boardRef.value.style.background = newVal);
})

const getMusicType = (item: MusicItem) => {
  if (item.time || item.time === 0) return '付费音乐'
  return item.type === 1 ? '允许试听' : '免费音乐'
}
</script>

<template>
  <div class="music-list-board"
    ref="boardRef"
    :class="{ active: show }">
    <div class="bg-image"></div>
    <div style="width: 100%; height: 100%; overflow: auto;">
      <div v-for="(item, index) in musicList"
        :key="item.id"
        class="music-item"
        @click.stop="choseMusic(index)"
        :class="{ active: index === playIndex }">
        <span>{{ item.title }}</span>
        <span>{{ getMusicType(item) }}</span>
      </div>
    </div>

    <div class="music-list-down"
      @click.stop="closeBoradFn">
      <span class="iconfont icon-xia"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music-list-board {
  position: absolute;
  display: none;
  left: 50%;
  bottom: 100%;
  min-width: 38%;
  height: 210px;
  transform: translate(-50%, 200%);
  padding: 30px 14px 10px;
  overflow-y: scroll;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid #ccc;
  border-bottom: none;
  box-shadow: 0 -4px 20px #555;

  &::-webkit-scrollbar {
    display: none;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .35;
    z-index: -1;
    background-color: #f1f1f1;
  }

  &.active {
    display: block;
    z-index: 150;
    transform: translate(-50%, 0);
  }

  .music-list-down {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1px 24px;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
  }

  .music-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin-bottom: 5px;
    cursor: pointer;
    padding: 8px;

    &.active {
      background-color: var(--base-color);
      color: #fff;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 920px) {
  .music-list-board {
    height: 13.125rem;
    padding: 1.875rem .875rem .625rem;
    backdrop-filter: blur(.625rem);
    border-radius: .3125rem;
    border-width: .0625rem;
    box-shadow: 0 -0.25rem 1.25rem #555;

    .music-list-down {
      padding: .0625rem .75rem;
      border-width: .0625rem;
      border-radius: 0 0 .3125rem .3125rem;
    }

    .music-item {
      font-size: 1rem;
      margin-bottom: .3125rem;
      padding: .5rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .music-list-board {
    width: 85%;
    height: 13.25rem;
  }
}
</style>