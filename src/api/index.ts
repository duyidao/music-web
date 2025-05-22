import { musicList } from "@/store/data.ts";
import { audioState } from "@/store/music.ts";

/**
 * 根据音乐ID获取音乐数据
 *
 * @param musicId 音乐ID
 * @returns 返回一个Promise，解析为解码后的音频数据
 * @throws 如果未找到指定ID的音乐，则抛出错误
 */
export const fetchMusicData = (musicId: string) => {
  const music = musicList.value.find((m) => m.id === musicId);
  if (!music) throw new Error("Music not found");

  return new Promise((resolve) => {
    fetch(music.audioUrl).then((response) => {
      response.arrayBuffer().then((arrayBuffer) => {
        return resolve(audioState.value!.context!.decodeAudioData(arrayBuffer));
      });
    });
  });
};
