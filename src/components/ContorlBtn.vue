<script setup lang="ts">
import { load } from '@/store/music.ts'
import { musicList, currentMusic, type MusicItem } from '@/store/data.ts'

const choseMusic = (item: MusicItem) => {
  currentMusic.value = item;
  load(item.audioUrl)
}
</script>

<template>
  <div class="contoel-btn">
    <div v-for="item in musicList" :key="item.id" class="text-2xl" @click.stop="choseMusic(item)">{{ item.title }}</div>
  </div>
</template>

<style scoped>

</style>