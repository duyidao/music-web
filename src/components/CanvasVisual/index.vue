<script setup
  lang="ts">
  import { screenWidth, ratio } from '@/utils/index.ts';
  import { currentMusic } from '@/store/data.ts'
  import { analyser, isPlaying } from '@/store/music.ts'

  const canvasWidth = computed(() => {
    return screenWidth.value < 768 ? screenWidth.value - 100 * ratio.value : 400
  });

  // 初始化参数
  const config = {
    centerRadius: 100 * (screenWidth.value < 768 ? ratio.value : 1),    // 中心Logo区域半径
    bars: 86,             // 柱体数量
    maxBarLength: 100 * (screenWidth.value < 768 ? ratio.value : 1),    // 最大柱体长度
    rotateSpeed: 0.05,    // 旋转速度
    barWidth: 6 * (screenWidth.value < 768 ? ratio.value : 1),          // 柱体宽度
    smoothFactor: 0.85    // 平滑系数
  };

  let rotation = 0;
  let historyData = new Array(config.bars).fill(0);

  const logoImg = new Image();

  const dataArray = ref<Uint8Array | null>(null); // 频率数据数组
  const canvasRef = ref<HTMLCanvasElement | null>(null); // Canvas引用

  let ctx: CanvasRenderingContext2D;
  let centerX: number;
  let centerY: number;
  /**
   * 绘制环形柱状图
   */
  const draw = () => {
    requestAnimationFrame(draw);

    // 获取频率数据
    analyser.value!.getByteFrequencyData(dataArray.value as Uint8Array);

    // 每次绘制前清空画布
    ctx.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height);
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvasRef.value!.width, canvasRef.value!.height);

    centerX = canvasRef.value!.width / 2;
    centerY = canvasRef.value!.height / 2;
    // 绘制中心Logo
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, config.centerRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(
      logoImg,
      centerX - config.centerRadius,
      centerY - config.centerRadius,
      config.centerRadius * 2,
      config.centerRadius * 2
    );

    ctx.restore();
    ctx.save();

    if (!isPlaying.value) return;

    ctx.translate(centerX, centerY);
    rotation += config.rotateSpeed;
    ctx.rotate(rotation * Math.PI / 180);
    const angleStep = (Math.PI * 2) / config.bars;
    let currentAngle = 0;

    // 绘制柱状图
    for (let i = 0; i < config.bars; i++) {
      const value = dataArray.value![i] / 255;
      historyData[i] = value > historyData[i]
        ? value
        : historyData[i] * config.smoothFactor;
      const barLength = historyData[i] * config.maxBarLength;

      ctx.fillStyle = 'green';

      ctx.save();
      ctx.rotate(currentAngle);

      // 绘制圆角柱体
      ctx.beginPath();
      ctx.roundRect(
        -config.barWidth / 2,
        -config.centerRadius - barLength,
        config.barWidth,
        barLength,
        config.barWidth / 2
      );
      ctx.fill();

      ctx.restore();
      currentAngle += angleStep;
    }

    ctx.restore();
  };

  watch(() => currentMusic.value, (newVal) => {
    // 加载Logo
    logoImg.src = newVal.logo; // 替换为你的Logo路径

    // 初始化数据数组
    dataArray.value = new Uint8Array(analyser.value!.frequencyBinCount);
    logoImg.onload = () => { // 等待图片加载完成
      nextTick(() => {
        ctx = canvasRef.value!.getContext('2d')!;
        draw();
      });
    };
  }, { deep: true })
</script>

<template>
  <canvas ref="canvasRef"
    :width="canvasWidth"
    :height="canvasWidth"></canvas>
</template>

<style lang="less" scoped>
  canvas {
    background-color: transparent;
  }
</style>