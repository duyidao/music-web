<script lang="ts" setup>
import {order} from '@/store/contorl.ts';
import {OrderType} from '@/types/music.ts';

// 定义状态切换顺序
const ORDER_CYCLE = {
  SEQUENCE: 'btn-shunxu',
  RANDOM: 'btn-suiji',
  SINGLE: 'btn-xunhuan',
}

const icons = computed(() => [
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
    <a
      v-for="item in icons"
      :key="item.icon"
      :class="item.icon"
      :title="item.title"
      @click.stop="item.click">
    </a>
  </div>
</template>

<style lang="less" scoped>
a {
  display: block;
  width: 26px;
  height: 25px;
  background-image: url(../../assets/images/bg.png);
  color: hsla(0, 0%, 88.2%, .8);
  opacity: .8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.btn-list {
  margin-right: 20px;

  .btn-shunxu {
    background-position: 0 -205px;
  }

  .btn-xunhuan {
    background-position: 0 -232px;
  }

  .btn-suiji {
    height: 19px;
    background-position: 0 -74px;
  }
}
</style>