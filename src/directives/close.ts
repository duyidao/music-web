import { showAuthor } from '@/store/author.ts'

// 为dom结构绑定事件
export const changePhoneDomShow = (el, value) => {
  console.log('el,value', el, value)
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    showAuthor.value = value
  })
}

export default {
  mounted(el, binding) {
    const { value } = binding
    changePhoneDomShow(el, value)
  },
}
