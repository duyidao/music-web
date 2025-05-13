import { musicList } from './data.ts'

export const userTime = ref({
  'Bones': 0,
  'Demons': 15,
  'Brids': 7800,
  'Bad Liar': 360,
})

export const userColor = ref('')

export const setUserColor = (color: string = '#4fa273') => {
  userColor.value = color;
  document.documentElement.style.setProperty(`--base-color`, userColor.value)
}
setUserColor();

export const addUserTime = (id: string, time: number) => {
  if (id in userTime.value) {
    userTime.value[id as keyof typeof userTime.value] += time;
  }
  const obj = musicList.value.find(item => item.id === id);
  obj ? obj.time! += time : null;
}