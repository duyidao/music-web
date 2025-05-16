import { MusicItem } from '../types/music';
import { destroy, audioBuffer, nowPlay, init, audioContext } from "./music.ts";
import { canPlayFn } from "./user.ts";
import { musicList, modelList } from "./data.ts";
import { playIndex, currentTime, duration } from "./contorl.ts";

let activeLoad: Load | null = null;

class Load {
  _value;
  flag: boolean = true;

  // 创建可中止控制器
  NOOP = () => {};

  /**
   * 停止当前操作
   */
  cancel = this.NOOP;

  constructor(value: MusicItem) {
    this._value = value;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.cancel = () => {
        // 停止当前正在播放的实例
        destroy();
        resolve = reject = this.NOOP;
      };

      const flag = canPlayFn(this._value);
      if (!flag) {
        resolve(false); // ✅ 正确：通过resolve返回
        return; // 显式终止
      }

      const index = musicList.value.findIndex(
        (i) => i.audioUrl === this._value.audioUrl
      );
      playIndex.value = index;
      currentTime.value = 0;

      modelList.value.unshift(`正在加载音频：${this._value.id}`);
      fetch(this._value.audioUrl)
        .then(async (res) => {
          init();
          const arrayBuffer = await res.arrayBuffer();
          audioBuffer.value = await audioContext.value!.decodeAudioData(
            arrayBuffer
          );

          duration.value = audioBuffer.value.duration;
          nowPlay.value = this._value;
          if (!activeLoad) {
            activeLoad = this;
            this.flag = true;
            modelList.value.unshift(`音频${this._value.id}加载成功`);
          } else {
            this.flag = false;
          }
          resolve(this.flag);
        })
        .catch((err) => {
          this.flag = false;
          modelList.value.unshift(`音频加载失败：${err}`);
          reject(this.flag);
        })
        .finally(() => {
          activeLoad = null;
        });
    });
  }
}

export const newLoad = (value: MusicItem) => {
  return new Load(value);
};
