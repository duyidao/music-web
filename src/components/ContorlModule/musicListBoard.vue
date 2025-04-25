<script setup lang="ts">
import { load } from '@/store/music.ts'
import { musicList } from '@/store/data.ts'
import type { MusicItem } from '@/types/music.ts'
import { playIndex } from '@/store/contorl.ts'

const choseMusic = (item: MusicItem) => {
  load(item)
}

const show = defineModel('show');

const emit = defineEmits(['update:show'])

const closeBoradFn = () => {
  emit('update:show', false)
}
</script>

<template>
  <div class="music-list-board" :class="{ active: show }">
    <div v-for="(item, index) in musicList" :key="item.id" class="music-item" @click.stop="choseMusic(item)" :class="{ active: index === playIndex }">
        <span>{{ item.title }}</span>
        <span>梦龙乐队</span>
    </div>

    <div class="music-list-down">
      <span class="iconfont icon-xia" @click.stop="closeBoradFn"></span>
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
    isolation: isolate; /* ✅ 隔离堆叠上下文 */

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
      border: 1px solid #000;
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
</style>