<template>
  <div class="author">
    <div class="author-list">
      <div v-for="item in 167" :key="item" class="author-item">{{ item }}</div>
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
  padding: 40px 18px 18px;
  backdrop-filter: blur(20px);
  z-index: 9999;
}

.author-list {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  // 使用 grid 布局
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 20px;
  justify-content: center; /* 整体居中 */

  .author-item {
    width: 130px;
    height: 130px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
}
</style>
