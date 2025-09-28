import close from './close.js'
import type { App, ObjectDirective } from 'vue'

const directives: Record<string, ObjectDirective> = {
  close,
}

export default {
  /**
   * 安装所有指令到Vue应用中
   *
   * @param app Vue应用实例
   */
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}
