import { musicList } from "@/store/data.ts";

export const fetchMusicData = async (musicId: string) => {
  const music = musicList.value.find(m => m.id === musicId);
  if (!music) throw new Error('Music not found');
  
  const response = await fetch(music.audioUrl);
  const arrayBuffer = await response.arrayBuffer();
  return audioContext.value!.decodeAudioData(arrayBuffer);
};