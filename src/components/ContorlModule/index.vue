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
      <span class="iconfont icon-play_list" @click.stop="showBoardFn"></span>
      <Volume />
    </div>
    <MusicListBoard v-model:show="showBorad" />
  </div>
</template>

<style lang="less" scoped>
  .control-module {
    position: relative;
    display: grid;
    gap: 10px;
    /* 可根据需要调整间距 */
    height: 20%;
    padding: 15px 20px;
    background-color: #f1f1f1f1;
    z-index: 100;

    :deep(.progress-bar__info) {
      width: 60%;
    }

    .controls-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      /* 按钮之间的间距 */
      width: 100%;

      &>* {
        flex: 1;
        /* 关键属性：让两个元素均分剩余空间 */
        max-width: max-content;
        /* 可选：限制最大宽度为内容宽度 */
      }

      .icon-play_list {
        font-size: 22px;
        font-weight: 700;
        margin: 0 20px;
      }

      :deep(.control-btn) {
        display: flex;
        align-items: flex-end;

        span {
          font-size: 38px;
          margin: 0 6px;

          &:first-child, &:last-child {
            font-size: 28px;
          }
        }
      }

      :deep(.contoel-volume) {
        display: flex;
        align-items: center;

        .iconfont {
          margin-right: 10px;
          font-size: 28px;
        }

        &__model {
          position: relative;
          display: flex;
          align-items: center;
          width: 120px;
          padding: 2px 6px 2px 14px;
          background-color: #ccc;
          border-radius: 5px;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            transform: translate(0, -50%);
            border-left: 2px solid transparent;  /* 100 × √3/2 ≈ 86.6 */
            border-top: 6px solid transparent;  /* 100 × √3/2 ≈ 86.6 */
            border-bottom: 6px solid transparent;
            border-right: 10px solid #ccc;
          }

          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>