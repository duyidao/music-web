/**
 * 创建一个可取消的任务
 *
 * @param fn 任务函数，返回一个Promise
 * @returns 一个包含取消和执行任务方法的对象
 */
export const createCancelableTask = (fn) => {
  const NOOP = () => {};
  let cancel = NOOP;

  return {
    cancel: () => cancel(),
    run: (...args) => {
      return new Promise((resolve, reject) => {
        cancel();
        cancel = () => (resolve = reject = NOOP);

        fn(...args)
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    }
  }
}