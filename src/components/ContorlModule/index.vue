<script lang="ts" setup>
import Progress from './progressBar.vue'
import Volume from './volume.vue'
import PlayBtn from './playBtn.vue'
import ControlBtn from './controlBtn.vue'
import { showAuthor } from '@/store/author.ts'

// 点击切换歌手的按钮
const showAuthorList = () => {
  showAuthor.value = true
}
</script>

<template>
  <div class="control-module">
    <PlayBtn />
    <Progress />
    <div class="controls-row">
      <ControlBtn />
      <Volume />
      <a title="切换歌手" class="music-list-btn-author" v-close="true"></a>
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
    width: 250px;

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

    .music-list-btn-author {
      width: 24px;
      height: 22px;
      background-position: 0 -370px;
    }
  }
}
</style>
