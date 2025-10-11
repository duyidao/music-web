<script setup lang="ts">
import { musicList, currentMusic } from '@/store/data.ts'
import { audioState } from '@/store/music.ts'
import { authorChoose, authorShow } from '@/store/author.ts'
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
  () => [authorChoose.value, currentMusic.value],
  () => {
    playListIndex.value = musicHasLoadList.value.findIndex(
      (e) => e.id === currentMusic.value.id
    )
  },
  {
    deep: true,
  }
)

const content = ref('暂无播放歌曲')
watch(
  () => [audioState.value.isPlaying, currentMusic.value],
  () => {
    content.value =
      currentMusic.value && currentMusic.value.id && audioState.value.isPlaying
        ? `正在播放:${currentMusic.value.title}`
        : '暂无播放歌曲'
  },
  {
    deep: true,
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
  <aside class="music-list" :class="{ 'music-list-hide': !authorShow }">
    <template v-if="authorShow">
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
    </template>
    <template v-else>
      <div class="music-list-hide-title">
        {{ content }}
      </div>
    </template>
  </aside>
</template>

<style scoped lang="less">
.music-list {
  width: 450px;
  height: calc(100vh - 90px);
  padding: 10px;
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'SimSun',
    sans-serif;
  transition: all 0.3s;
  will-change: width;

  &.music-list-hide {
    width: 100px;

    .music-list-hide-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      writing-mode: vertical-lr; /* 从左到右竖排 */
      /* 或者 writing-mode: vertical-rl; 从右到左竖排 */
      text-orientation: upright; /* 文字保持直立 */
      font-size: 18px;
      letter-spacing: 4px; /* 字符间距 */
      color: #bbb;
    }
  }

  .music-list-body {
    height: calc(100% - 40px);
    margin: 5px 0;
    overflow-y: auto;
    .music-list-body-item {
      cursor: pointer;

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
      align-items: center;
      width: 65%;
      height: 100%;
      padding-left: 10px;

      span:nth-of-type(1) {
        display: block;
        width: 10px;
        height: 10px;
        transform: translateY(-1px);
      }
      span:nth-of-type(2) {
        display: block;
        margin-left: 10px;
      }
    }

    > span {
      display: flex;
      align-items: center;
      width: 35%;
      height: 100%;
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
