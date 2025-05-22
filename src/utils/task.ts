import { fetchMusicData } from "@/api/index.ts";
import { loadAndPlay } from "@/store/contorl.ts";

/**
 * 创建一个可取消的任务
 *
 * @param fn 任务函数，返回一个Promise
 * @returns 一个包含取消和执行任务方法的对象
 */
export const createCancelableTask = (fn: any) => {
  const NOOP = () => {};
  let cancel = NOOP;

  return {
    cancel: () => cancel(),
    run: (...args: unknown[]) => {
      return new Promise((resolve, reject) => {
        cancel();
        cancel = () => (resolve = reject = NOOP);

        fn(...args)
          .then((res: any) => resolve(res))
          .catch((err: any) => reject(err));
      });
    },
  };
};

interface Task {
  id: string;
  status: "waiting" | "pending" | "success" | "error";
  data?: AudioBuffer | null;
  error?: Error;
}

const MAX_CONCURRENT = 4;
export const taskMap = new Map<string, Task>(); // 任务映射
export let pendingQueue: string[] = []; // 待处理任务队列
let activeTask: any = null;
export function changeActiveTask (e: any) {
  activeTask = e;
}

let activeCount = 0;

/**
 * 获取音乐数据
 *
 * @param taskId 任务ID
 */
const getMusic = (taskId: string) => {
  const task = taskMap.get(taskId)!;
  task.status = "pending";
  fetchMusicData(taskId)
    .then((response) => {
      task.status = "success";
      // ts-ignore
      task.data = response as AudioBuffer;
      if (activeTask && activeTask.id && activeTask.id === taskId) {
        loadAndPlay();
      }
    })
    .catch((err) => {
      task.status = "error";
      task.error = err as Error;
    })
    .finally(() => {
      taskMap.set(taskId, task);
      activeCount--;
      processQueue(); // 继续处理下一个任务
    });
};

/**
 * 处理队列中的任务
 */
export function processQueue() {
  if (activeCount >= MAX_CONCURRENT || pendingQueue.length === 0) return;

  const taskId = pendingQueue.shift()!;

  activeCount++;

  getMusic(taskId); // 开始获取音乐数据
}

/**
 * 处理一次任务队列
 *
 * @param taskId 任务ID
 */
export function processQueueOnce(taskId: string) {
  pendingQueue = pendingQueue.filter((id) => id !== taskId);

  activeCount++;

  getMusic(taskId); // 开始获取音乐数据
}
