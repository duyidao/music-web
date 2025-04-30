<script setup lang="ts">
import { modelList } from '@/store/data.ts';

let intervalId: any = null;
watch(() => modelList.value, (newVal: string[]) => {
  if (newVal.length <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }

  if (newVal.length > 3) {
    modelList.value.splice(3, newVal.length - 1);
  }

  if (intervalId) return // 避免重复启动

  intervalId = setInterval(() => {
    modelList.value.pop();
  }, 3000)
}, { immediate: true, deep: true })
</script>

<template>
  <div class="model-list" v-if="modelList.length">
    <div class="model-item active" :style="{ '--mt': index * 150 + '%' }" v-for="(item, index) in modelList" :key="item + index">{{ item }}</div>
  </div>
</template>

<style lang="less" scoped>
.model-list {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  .model-item {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.3s;

    &.active {
      transform: translate(-50%, var(--mt));
    }
  }
}
</style>