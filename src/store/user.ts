import { musicList } from './data.ts'

export const userTime = ref({
  'Bones': 360,
  'Demons': 15,
  'Brids': 7800,
  'Bad Liar': 0,
})

export const addUserTime = (id: string, time: number) => {
  if (id in userTime.value) {
    userTime.value[id as keyof typeof userTime.value] += time;
  }
  const obj = musicList.value.find(item => item.id === id);
  obj ? obj.time! += time : null;
}