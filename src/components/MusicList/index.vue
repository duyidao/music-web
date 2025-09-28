<script setup lang="ts">
import { musicList, currentMusic } from '@/store/data.ts'
import { audioState } from '@/store/music.ts'
import { authorChoose } from '@/store/author.ts'
import { playIndex, loadAndPlay } from '@/store/contorl.ts'
import { taskMap } from '@/utils/task.ts'
import type { MusicItem } from '@/types/music.ts'

const musicHasLoadList = computed(() => {
  const list = musicList.value.map((item) => {
    return {
      ...item,
      loading:
        taskMap.value.get(item.id)?.status === 'pending' ||
        taskMap.value.get(item.id)?.status === 'waiting',
    }
  })
  if (!authorChoose.value) {
    return list
  }
  return list.filter((item: MusicItem) => item.author === authorChoose.value)
})

const playListIndex = ref<number>(-1)

// 如果切换了歌手，那么重新计算激活的索引
watch(
  () => authorChoose.value,
  () => {
    playListIndex.value = musicHasLoadList.value.findIndex(
      (e) => e.id === currentMusic.value.id
    )
  }
)

// 播放新的音频
const choseMusic = (item: MusicItem, index: number) => {
  playIndex.value = musicList.value.findIndex((e) => e.id === item.id)
  playListIndex.value = index
  loadAndPlay()
}
</script>

<template>
  <aside class="music-list">
    <!-- 歌曲列表标题 -->
    <div class="music-list-head">
      <p>歌名</p>
      <span>歌手</span>
    </div>
    <!-- 歌曲列表选项 -->
    <div class="music-list-body">
      <div
        v-for="(item, index) in musicHasLoadList"
        :key="item.id"
        class="music-list-body-item"
        :class="{
          active: index === playListIndex && audioState.isPlaying,
          loading: item.loading,
        }"
        :style="{ '--index': index + 1 }"
        @click.stop="choseMusic(item, index)"
      >
        <p>
          <span>{{ index + 1 }}</span>
          <span>{{ item.title }}</span>
        </p>
        <span>{{ item.author || 'Imagine Dragons' }}</span>
      </div>
    </div>
    <!-- 歌曲列表卡片搜索与歌手筛选等按钮 -->
    <div class="music-list-btns">
      <a title="收起列表" class="music-list-btn-flexible"></a>
    </div>
  </aside>
</template>

<style scoped lang="less">
.music-list {
  width: 450px;
  height: 100vh;
  padding: 10px;

  .music-list-btns {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;

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

    .music-list-btn-flexible {
      width: 21px;
      height: 22px;
      background-position: 0 -260px;
      margin-left: 25px;
    }
  }

  .music-list-body {
    height: calc(100% - 90px);
    margin: 5px 0;
    overflow-y: auto;
    .music-list-body-item {
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
            background: url('@/assets/images/wave.gif') 0 0 no-repeat;
            text-indent: -99px;
            overflow: hidden;
          }
        }
      }

      &.loading {
        p {
          span:nth-of-type(1) {
            background: url('@/assets/images/loading.gif') 0 0 no-repeat;
            text-indent: -99px;
            overflow: hidden;
          }
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .music-list-head,
  .music-list-body .music-list-body-item {
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
        margin-left: 10px;
      }
    }

    > span {
      width: 35%;
      text-overflow: ellipsis; /*省略号 */
      white-space: nowrap; /*溢出时不换行 */
      overflow: hidden; /*溢出时隐藏 */
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
