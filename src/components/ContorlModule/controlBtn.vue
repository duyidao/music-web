<script lang="ts" setup>
import { order } from '@/store/contorl.ts'
import { OrderType } from '@/types/music.ts'
import { showAuthor, authorShow } from '@/store/author.ts'

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
    events: {
      click: () => {
        order.value =
          order.value === OrderType.Sequence
            ? OrderType.Random
            : order.value === OrderType.Random
            ? OrderType.Single
            : OrderType.Sequence
      },
    },
  },
  {
    title: '切换歌手',
    icon: 'btn-author',
    events: {
      click: (event: Event) => {
        event.stopPropagation()
        showAuthor.value = true
      },
    },
  },
  {
    title: '收起列表',
    icon: {
      'btn-flexible': true,
      'btn-flexible-hide': !authorShow.value,
    },
    events: {
      click: () => {
        authorShow.value = !authorShow.value
      },
    },
  },
])
</script>

<template>
  <div class="btn-list">
    <a
      v-for="item in icons"
      :key="item.title"
      :class="item.icon"
      :title="item.title"
      v-on.stop="item.events"
    >
    </a>
  </div>
</template>

<style lang="less" scoped>
a {
  display: block;
  width: 26px;
  height: 25px;
  background-image: url(../../assets/images/bg.png);
  color: hsla(0, 0%, 88.2%, 0.8);
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.btn-list {
  display: flex;
  align-items: center;
  gap: 15px;

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

  .btn-author {
    width: 24px;
    height: 22px;
    background-position: 0 -370px;
  }

  .btn-flexible {
    width: 21px;
    height: 22px;
    background-position: 0 -260px;
    transform: rotate(0deg);
    transition: all 0.3s;

    &.btn-flexible-hide {
      transform: rotate(180deg);
    }
  }
}
</style>
