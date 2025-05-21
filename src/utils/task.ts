import { fetchMusicData } from '@/api/index.ts';

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
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
  };
};

interface Task {
  id: string;
  status: "pending" | "success" | "error";
  data?: AudioBuffer | null;
  error?: Error;
}

const MAX_CONCURRENT = 3;
export const taskMap = new Map<string, Task>();
export let pendingQueue: string[] = [];
let activeCount = 0;

export async function processQueue() {
  if (activeCount >= MAX_CONCURRENT || pendingQueue.length === 0) return;

  const taskId = pendingQueue.shift()!;
  const task = taskMap.get(taskId)!;

  activeCount++;
  task.status = "pending";

  fetchMusicData(taskId)
    .then((response) => {
      task.status = "success";
      task.data = response;
      taskMap.set(taskId, task);
    })
    .catch((err) => {
      task.status = "error";
      task.error = err as Error;
      taskMap.set(taskId, task);
    })
    .finally(() => {
      activeCount--;
      processQueue(); // 继续处理下一个任务
    });
}
