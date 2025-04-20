<script setup lang="ts">
import ContorlBtn from '@/components/ContorlBtn.vue'
import Music from '@/components/Music.vue'
import { loadMusicData } from '@/store/data.ts'

onMounted(() => {
  loadMusicData()
})
</script>

<template>
  <ContorlBtn />
  <Music />
</template>

<style scoped>

</style>