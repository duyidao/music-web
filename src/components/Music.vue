<script setup lang="ts">
import { init, load } from '@/store/music.ts'
import { musicList, currentMusic, type MusicItem } from '@/store/data.ts'
import type { LrcListType } from '@/types/music.ts'

onMounted(() => {
  init()
})

const lrcList = computed<ComputedRef<lrcListType>>(() => {
  return currentMusic.value?.lyric?.split('\n').map(item => {
    console.log('-----------item:', item)
    if (!item) return {};
    const timeString = item?.split(']')[0]?.replace('[', '')
    const min = Number(timeString?.split(':')?.[0]) || 0
    const second = Number(timeString?.split(':')?.[1]?.split('.')?.[0]) || 0
    const ms = Number(timeString?.split(':')?.[1]?.split('.')?.[1]) || 0
    return {
      time: min * 60 * 1000 + second * 1000 + ms * 10,
      text: item.split(']')[1]
    }
  }) || ['暂无歌词']
})

const choseMusic = (item: MusicItem) => {
  currentMusic.value = item;
  load(item.audioUrl)
}
</script>

<template>
  <div class="music">
    <div class="music-logo">
      <img :src="currentMusic?.logo" alt="音乐logo" />
    </div>
    <div class="music-lrc">
      <div class="music-lrc-content" v-for="item in lrcList">{{ item.time }}{{ item.text }}</div>
    </div>

    <div class="music-chose">
      <div v-for="item in musicList" :key="item.id" class="text-2xl" @click.stop="choseMusic(item)">{{ item.title }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


  .music-logo {
    width: 38%;
    padding: 0 30px 0 100px;

    img {
      width: 100%;
      aspect-ratio: 1/1;  /* 宽高比强制为 1:1（正方形） */
      object-fit: contain;  /* 控制图片填充方式（cover 裁剪，contain 包含） */
      border-radius: 50%;
    }
  }

  .music-lrc {
    flex: 1;
    height: 100%;
    overflow: scroll;
  }

  .music-chose {
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
}
</style>