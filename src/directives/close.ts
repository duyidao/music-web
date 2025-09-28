import { showAuthor } from '@/store/author.ts'
import type { DirectiveBinding } from 'vue'

// 为dom结构绑定事件
export const changePhoneDomShow = (el: HTMLElement, value: boolean) => {
  el.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation()
    showAuthor.value = value
  })
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    const { value } = binding
    changePhoneDomShow(el, value)
  },
}
