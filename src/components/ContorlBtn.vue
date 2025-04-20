<script setup lang="ts">
import { load } from '@/store/music.ts'
import { musicList, type MusicItem } from '@/store/data.ts'

const choseMusic = (item: MusicItem) => {
  load(item.audioUrl)
}
</script>

<template>
  <div v-for="item in musicList" :key="item.id" class="text-2xl" @click.stop="choseMusic(item)">{{ item.title }}</div>
</template>

<style scoped>

</style>