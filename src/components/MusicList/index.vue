<script setup lang="ts">
import { musicList } from '@/store/data.ts'
import { audioState } from '@/store/music.ts'
import { playIndex, loadAndPlay } from '@/store/contorl.ts'

const choseMusic = (index: number) => {
  playIndex.value = index
  loadAndPlay()
}
</script>

<template>
  <div class="music-list">
    <div class="music-list-head">
      <p>歌名</p>
      <span>歌手</span>
    </div>
    <div v-for="(item, index) in musicList" :key="item.id" class="music-list-body" :class="{active: index === playIndex && audioState.isPlaying}" :style="{'--index': index + 1}" @click.stop="choseMusic(index)">
      <p>
        <span>{{ index + 1 }}</span>
        <span>{{ item.title }}</span>
      </p>
      <span>Imagine Dragons</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.music-list {
  width: 450px;
  height: 100vh;
  padding: 10px;
  overflow-y: auto;

  .music-list-body {
    cursor: pointer;

    > span {
      display: flex;
      align-items: center;
    }

    &.active {
      color: #fff;
      background: var(--base-color);

      p {
        span:nth-of-type(1) {
          background: url("@/assets/images/wave.gif") 0 0 no-repeat;
          text-indent: -99px;
          overflow: hidden;
        }
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .music-list-head,
  .music-list-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    color: #ccc;

    p {
      display: flex;
      width: 65%;
      padding-left: 10px;

      span:nth-of-type(1) {
        display: block;
        width: 10px;
        height: 10px;
      }
      span:nth-of-type(2) {
        display: block;
        margin-left: 6px;
      }
    }

    > span {
      width: 35%;
      text-overflow:ellipsis;/*省略号 */
      white-space:nowrap;/*溢出时不换行 */
      overflow:hidden;/*溢出时隐藏 */
      margin-right: 8px;
    }
  }

  .music-list-head {
    > p {
      padding-left: 25px;
    }
  }
}
</style>