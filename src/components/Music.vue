<script setup lang="ts">
import { init, timeout } from '@/store/music.ts'
import { currentMusic, lrcList } from '@/store/data.ts'
import { currentTime, show } from '@/store/contorl.ts'
import { screenWidth, ratio } from '@/utils/index.ts';
import { addUserTime } from '@/store/user.ts'
import { modelList } from '@/store/data.ts';
import CanvasVisual from '@comp/CanvasVisual/index.vue'

// @ts-ignore
import ColorThief from 'colorthief';

const colorThief = new ColorThief();
// @ts-ignore
const bgColor = ref('transparent');
const getBg = async () => {
  if (!currentMusic.value?.logo) return

  try {
    // 1. 创建图片对象并加载
    const img = new Image()
    img.crossOrigin = 'Anonymous' // 处理跨域问题
    img.src = currentMusic.value.logo

    // 2. 等待图片加载完成
    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = reject
    })

    // 3. 获取颜色
    const colors = await colorThief.getColor(img, 5)
    bgColor.value = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .35)`
  } catch (err) {
    console.error('获取背景色失败:', err)
    bgColor.value = 'transparent' // 设置默认颜色
  }
}

// @ts-ignore
onMounted(() => {
  init()
})

// @ts-ignore
const lrcActive = computed(() => {
  return lrcList.value.find((item: any) => {
    return item.time >= currentTime.value
  })
})
// @ts-ignore

const musicLrc = ref()
// @ts-ignore
const musicLrcContent = ref()
let musicLrcHeight = 0
// @ts-ignore
let liHeight = ref(screenWidth.value < 768 ? 40 * ratio.value : 40);
let maxOffsetTop = 0

// @ts-ignore
watch(() => lrcList.value, () => {
  musicLrcHeight = musicLrc.value.clientHeight; // 获取容器的高度
  maxOffsetTop = (lrcList.value.length - 1) * liHeight.value - musicLrcHeight + liHeight.value / 2; // 计算最大偏移量

  getBg();
})

// @ts-ignore
watch(() => screenWidth.value, (newVal: number) => {
  liHeight.value = newVal < 768 ? 40 * ratio.value : 40;
})

// @ts-ignore
watch(() => currentTime.value, () => {
  const index = lrcList.value.findIndex((item: any) => {
    return item.time >= currentTime.value
  })

  let offsetTop = index * liHeight.value + liHeight.value / 2 - musicLrcHeight / 2; // 计算偏移量
  if (offsetTop < 0) {
    offsetTop = 0
  }
  if (offsetTop > maxOffsetTop) {
    offsetTop = maxOffsetTop
  }

  musicLrcContent.value.style.transform = `translateY(-${offsetTop * (screenWidth.value < 768 ? ratio.value : 1)}px)` // 设置偏移量
})

// @ts-ignore
const buy = ref(0)
/**
 * 购买时长的处理函数
 */
const handleBuyFn = () => {
  console.log('buy.value', buy.value);
  if (isNaN(buy.value) || buy.value <= 0) {
    modelList.value.unshift('购买时长必须大于0')
    return;
  }
  addUserTime(currentMusic.value.id, buy.value);
  clearTimeout(timeout.value);
  timeout.value = null;
  buy.value = 0;
  modelList.value.unshift('购买成功，请继续享受音乐吧');
  show.value = false;
}

const phoneShow = ref<string>('image')
/**
 * 改变手机号显示类型
 *
 * @param type 显示类型，'image' 表示显示logo，'lrc' 表示显示歌词
 */
const changePhoneShow = (type: string) => {
  phoneShow.value = type
}
</script>

<template>
  <div class="music"
    :style="{ '--bg': bgColor }">
    <div class="music-logo"
      :class="{ 'active': phoneShow === 'image' }"
      @click.stop="changePhoneShow('lrc')">
      <CanvasVisual />
    </div>
    <div class="music-lrc"
      ref="musicLrc"
      :class="{ 'active': phoneShow === 'lrc' }"
      @click.stop="changePhoneShow('image')">
      <ul class="music-lrc-content"
        ref="musicLrcContent">
        <li v-for="item in lrcList"
          :class="{ active: (item as any)?.time === (lrcActive as any)?.time }"
          :style="{ height: `${liHeight}px` }">
          {{ (item as any)?.text }}
        </li>
      </ul>
    </div>

    <div class="music-show-more"
      v-close="true"
      title="购买音频">
      <span class="iconfont icon-gengduo"></span>
      <div class="music-more-content"
        :class="{ 'active': show }">
        <p>当前可听时长：{{ currentMusic?.hasOwnProperty('time') ? currentMusic.time + ' 秒' : '无需购买' }}</p>
        <div v-if="currentMusic?.hasOwnProperty('time')">
          <input v-model="buy"
            type="number"
            placeholder="请输入购买时长" />
          <button @click.stop="handleBuyFn">购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);

  .music-logo {
    width: 400px;
  }

  .music-lrc {
    flex: 1;
    height: 100%;
    overflow: scroll;

    ul {
      font-size: 16px;
      text-align: center;
      transition: all .3s;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          transform: scale(1.3);
          color: var(--base-color);
          text-shadow: 0 0px 10px #fff;
        }
      }
    }
  }

  .music-show-more {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 140px;
    left: 20px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .5);
    cursor: pointer;

    .music-more-content {
      position: absolute;
      transform: translateX(-130%);
      bottom: 50px;
      left: 0;
      width: max-content;
      padding: 15px;
      background-color: rgba(255, 255, 255, .5);
      transition: all .3s;

      &.active {
        transform: translateX(0);
      }

      p {
        font-size: 14px;
      }

      >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 14px;

        input {
          border: 1px solid #e1e1e1;
          font-size: 13px;
          padding: 4px 6px;
          background-color: transparent;
        }

        button {
          background-color: #ccc;
          margin-left: 8px;
          border-radius: 6px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .music {
    position: relative;
    display: block;

    .music-logo {
      display: none;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0;

      &.active {
        display: flex;
      }

      img {
        width: 100%;
        aspect-ratio: 1/1;
        /* 宽高比强制为 1:1（正方形） */
        object-fit: contain;
        /* 控制图片填充方式（cover 裁剪，contain 包含） */
        border-radius: 50%;
      }
    }

    .music-lrc {
      display: none;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;

      &.active {
        display: block;
      }

      ul {
        font-size: .75rem;

        li {
          &.active {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>