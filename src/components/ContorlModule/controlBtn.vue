<script setup lang="ts">
import { order } from '@/store/contorl.ts';
import { OrderType } from '@/types/music.ts';

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
</script>

<template>
  <div class="btn-list">
    <span class="iconfont"
      v-for="item in icons"
      :key="item.icon"
      :class="item.icon"
      :title="item.title"
      @click.stop="item.click"></span>
  </div>
</template>

<style lang="less" scoped>
.btn-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-left: .75rem;

  .iconfont {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0.5rem;
    cursor: pointer;
  }
}
</style>