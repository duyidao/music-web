import close from './close.js'

const directives = {
  close,
}
   
export default {
  /**
   * 安装所有指令到Vue应用中
   *
   * @param app Vue应用实例
   */
  install(app) {
    Object.keys(directives).forEach((key) => {
        app.directive(key, directives[key])
    })
  }
}