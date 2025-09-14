<script lang="ts" setup>
import Progress from './progressBar.vue'
import Volume from './volume.vue'
import PlayBtn from './playBtn.vue'
import ControlBtn from './controlBtn.vue'
</script>

<template>
  <div class="control-module">
    <PlayBtn/>
    <Progress/>
    <div class="controls-row">
      <ControlBtn/>
      <Volume/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.control-module {
  display: flex;
  height: 90px;
  padding: 20px 40px 30px;

  .controls-row {
    display: flex;
    align-items: center;
    width: 220px;
  }
}
</style>