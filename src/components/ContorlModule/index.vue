<script setup lang="ts">
import Progress from './progressBar.vue'
import Volume from './volume.vue'
import Btn from './btn.vue'
import MusicListBoard from './musicListBoard.vue'

const showBorad = ref<boolean>(false)

const showBoardFn = () => {
  showBorad.value = true;
}
</script>

<template>
  <div class="control-module">
    <Progress />
    <div class="controls-row">
      <Btn />
      <span class="iconfont icon-play_list"
        title="播放列表"
        @click.stop="showBoardFn"></span>
      <Volume />
    </div>
    <MusicListBoard v-model:show="showBorad" />
  </div>
</template>

<style lang="less" scoped>
.control-module {
  position: relative;
  display: grid;
  /* 可根据需要调整间距 */
  height: 15%;
  padding: .9375rem 1.25rem;
  background-color: #f1f1f1f1;
  z-index: 100;

  :deep(.progress-bar__info) {
    width: 60%;
  }

  .controls-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .625rem;
    /* 按钮之间的间距 */
    width: 100%;

    &>* {
      flex: 1;
      /* 关键属性：让两个元素均分剩余空间 */
      max-width: max-content;
      /* 可选：限制最大宽度为内容宽度 */
    }

    .icon-play_list {
      font-size: 1.375rem;
      font-weight: 700;
      margin: 0 1.25rem;
      cursor: pointer;
    }

    :deep(.control-btn) {
      display: flex;
      align-items: center;

      span {
        font-size: 2.375rem;
        margin: 0 .375rem;

        &:first-child,
        &:last-child {
          font-size: 1.75rem;
        }
      }
    }

    :deep(.contoel-volume) {
      position: relative;
      display: flex;
      align-items: center;

      .iconfont {
        margin-right: .625rem;
        font-size: 1.75rem;
      }

      &__model {
        position: absolute;
        display: none;
        align-items: center;
        top: 50%;
        left: 2.8125rem;
        transform: translate(0, -50%);
        width: 7.5rem;
        padding: .125rem .375rem .125rem .875rem;
        background-color: #ccc;
        border-radius: .3125rem;

        &.active {
          display: flex;
        }

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -0.625rem;
          transform: translate(0, -50%);
          border-left: .125rem solid transparent;
          border-top: .375rem solid transparent;
          border-bottom: .375rem solid transparent;
          border-right: .625rem solid #ccc;
        }

        span {
          margin-left: .625rem;
        }
      }
    }
  }
}
</style>