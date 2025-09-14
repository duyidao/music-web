<script lang="ts" setup>
import {audioState, pauseAudio} from '@/store/music.ts'
import {loadOrPlayAudio, next, prev} from '@/store/contorl.ts'
</script>

<template>
  <div class="control-btn">
    <a class="btn-prev"
       title="上一首"
       @click="prev"></a>
    <a v-if="!audioState.isPlaying"
       class="btn-bofang"
       title="播放"
       @click="loadOrPlayAudio"></a>
    <a v-else
       class="btn-zanting"
       title="暂停"
       @click="pauseAudio"></a>
    <a class="btn-next"
       title="下一首"
       @click="next"></a>
  </div>
</template>

<style lang="less" scoped>
a {
  display: block;
  background-image: url(../../assets/images/bg.png);
  color: hsla(0, 0%, 88.2%, .8);
  opacity: .8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;

  .btn-bofang {
    width: 21px;
    height: 29px;
    background-position: 0 0;
  }

  .btn-prev {
    width: 19px;
    height: 20px;
    background-position: 0 -30px;
  }

  .btn-next {
    width: 19px;
    height: 20px;
    background-position: 0 -52px;
  }

  .btn-zanting {
    width: 21px;
    height: 29px;
    background-position: -30px 0;
  }
}
</style>