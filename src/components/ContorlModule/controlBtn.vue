<script setup lang="ts">
import { order } from '@/store/contorl.ts';
import { OrderType } from '@/types/music.ts';
import { userColor, setUserColor } from '@/store/user.ts';

// 定义状态切换顺序
const ORDER_CYCLE = {
  SEQUENCE: 'icon-shunxubofang',
  RANDOM: 'icon-suijibofang',
  SINGLE: 'icon-danquxunhuan',
}

const emit = defineEmits(['update:showBorad']);

const icons = computed(() => [
  {
    title: '播放列表',
    icon: 'icon-play_list',
    click: () => {
      emit('update:showBorad', true);
    }
  },
  {
    title: '顺序切换',
    icon: ORDER_CYCLE[order.value as OrderType],
    click: () => {
      order.value = order.value === OrderType.Sequence ? OrderType.Random
        : order.value === OrderType.Random ? OrderType.Single : OrderType.Sequence
    }
  },
])

const colorList = ['#4fa273', '#9a8c53', '#a95737', '#6576b0', '#e6b360', '#4c4e53', '#8f6aa8', '#e9de64']

const show = ref(false);
</script>

<template>
  <div class="btn-list">
    <span class="iconfont"
      v-for="item in icons"
      :key="item.icon"
      :class="item.icon"
      :title="item.title"
      @click.stop="item.click">
    </span>
    <div class="color-change" @mouseenter="show = true" @mouseleave="show = false">
      <div class="color-chose-list" :class="{'active': show}">
        <span v-for="item in colorList" :key="item" :class="{'active': item === userColor}" :style="{'--bg': item}" @click="setUserColor(item)"></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.btn-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-left: 12px;

  .color-chose-list {
    display: none;
    flex-wrap: wrap;
    position: absolute;
    bottom: 35px;
    left: 50%;
    width: 148px;
    transform: translateX(-50%);
    background-color: #f1f1f1;
    padding: 5px 5px 5px 10px;

    &.active {
      display: flex;
    }

    span {
      width: 28px;
      height: 28px;
      margin: 0 5px 5px 0;
      border: 1px solid transparent;
      background-color: var(--bg);
      cursor: pointer;

      &.active {
        border: 2px solid #1b28e8;
      }
    }
  }

  .color-change {
    position: relative;
    width: 28px;
    height: 28px;
    margin: 0 8px;
    background-color: #e1e1e1;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      bottom: 28px;
      left: 50%;
      width: 148px;
      height: 8px;
      background-color: transparent;
      transform: translateX(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      inset: 2px;
      background-color: var(--base-color);
    }
  }

  .iconfont {
    font-size: 22px;
    font-weight: 700;
    margin: 0 8px;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  .btn-list {
  margin-left: .75rem;

  .color-chose-list {
    bottom: 2.1875rem;
    width: 9.25rem;
    padding: .3125rem .3125rem .3125rem .625rem;

    span {
      width: 1.75rem;
      height: 1.75rem;
      margin: 0 .3125rem .3125rem 0;
      border-width: .0625rem;

      &.active {
        border-width: .125rem;
      }
    }
  }

  .color-change {
    width: 1.75rem;
    height: 1.75rem;
    margin: 0 .5rem;

    &::before {
      bottom: 1.75rem;
      width: 9.25rem;
      height: .5rem;
    }

    &::after {
      inset: .125rem;
    }
  }

  .iconfont {
    font-size: 1.375rem;
    margin: 0 .5rem;
  }
}
}
</style>