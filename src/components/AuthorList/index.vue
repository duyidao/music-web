<script setup lang="ts">
import { authorList, showAuthor, authorChoose } from '@/store/author.ts'

const handleChooseAuthor = (item: string) => {
  if (authorChoose.value === item) {
    authorChoose.value = ''
  } else {
    authorChoose.value = item
  }
}
</script>

<template>
  <div class="author" :class="{ show: showAuthor }" v-close="true">
    <div class="author-close" v-close="false">×</div>
    <div class="author-list">
      <div
        v-for="item in authorList"
        :key="item"
        class="author-item"
        :class="{ active: authorChoose === item }"
        @click="handleChooseAuthor(item)"
        v-close="false"
      >
        <img :src="`https://music.duyidao.cn/music/logo/${item}.webp`" alt="" />
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.author {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 80vh;
  padding: 45px 18px 18px;
  backdrop-filter: blur(20px);
  transform: translateY(100%);
  transition: all 0.3s;
  z-index: 9999;

  &.show {
    transform: translateY(0);
  }

  .author-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .author-list {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    overflow-y: auto;
    // 使用 grid 布局
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 30px;
    justify-content: center; /* 整体居中 */

    .author-item {
      width: 130px;
      height: 130px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      border: 4px solid transparent;

      &.active {
        position: relative;
        border-color: var(--base-color);

        &::before {
          content: '√';
          display: block;
          position: absolute;
          top: -4px;
          left: -4px;
          width: 22px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          border-radius: 0 0 8px 0;
          background-color: var(--base-color);
          color: #fff;
          z-index: 1;
        }
      }

      img {
        width: 100%;
        height: 98px;
        object-fit: cover;
      }

      p {
        width: 100%;
        height: 24px;
        line-height: 22px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.25);
        color: #fff;
        border-radius: 0 0 10px 10px;
      }
    }
  }
}
</style>
