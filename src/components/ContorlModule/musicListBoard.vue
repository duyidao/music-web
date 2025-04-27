<script setup lang="ts">
import { load } from '@/store/music.ts'
import { musicList } from '@/store/data.ts'
import type { MusicItem } from '@/types/music.ts'
import { playIndex } from '@/store/contorl.ts'

const choseMusic = (item: MusicItem, index: number) => {
  playIndex.value = index
  load(item)
  closeBoradFn()
}

const show = defineModel('show');

const emit = defineEmits(['update:show'])

const closeBoradFn = () => {
  emit('update:show', false)
}
</script>

<template>
  <div class="music-list-board"
    :class="{ active: show }">
    <div style="width: 100%; height: 100%; overflow: auto;">
      <div v-for="(item, index) in musicList"
        :key="item.id"
        class="music-item"
        @click.stop="choseMusic(item, index)"
        :class="{ active: index === playIndex }">
        <span>{{ item.title }}</span>
        <span>梦龙乐队</span>
      </div>
    </div>

    <div class="music-list-down">
      <span class="iconfont icon-xia"
        @click.stop="closeBoradFn"></span>
    </div>
  </div>
</template>

<style scoped>
.music-list-board {
  position: absolute;
  display: none;
  left: 50%;
  bottom: 100%;
  min-width: 38%;
  height: 210px;
  transform: translate(-50%, 200%);
  padding: 30px 14px 10px;
  background-color: #f1f1f1;
  overflow-y: scroll;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  isolation: isolate;
  /* ✅ 隔离堆叠上下文 */

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
    padding: 1px 12px;
    border: 1px solid #ccc;
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
      background-color: #4CAF50;
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