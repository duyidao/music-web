<script lang="ts" setup>
import Progress from './progressBar.vue'
import Volume from './volume.vue'
import PlayBtn from './playBtn.vue'
import ControlBtn from './controlBtn.vue'
</script>

<template>
  <div class="control-module">
    <PlayBtn />
    <Progress />
    <div class="controls-row">
      <Volume />
      <ControlBtn />
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
    width: 325px;

    a {
      display: block;
      background-image: url(../../assets/images/bg.png);
      color: hsla(0, 0%, 88.2%, 0.8);
      opacity: 0.8;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
