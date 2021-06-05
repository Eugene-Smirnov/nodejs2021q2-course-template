import { Task } from './task.model';

const storedTasks: Task[] = [];

export const getAll = async (): Promise<Task[]> => storedTasks;

export const getById = async (id: string): Promise<Task | undefined> =>
  storedTasks.find((task: Task) => task.id === id);

export const create = async (taskDto: Task, boardId: string): Promise<Task> => {
  const task = new Task(taskDto);
  task.boardId = boardId;
  storedTasks.push(task);
  return task;
};

export const update = async (
  id: string,
  taskUpdateDto: Task
): Promise<Task | undefined> => {
  const task = await getById(id);
  Object.assign(task, taskUpdateDto);
  return task;
};

export const remove = async (id: string): Promise<void> => {
  const index = storedTasks.findIndex((task) => task.id === id);
  storedTasks.splice(index, 1);
};

export const removeByBoardId = async (boardId: string): Promise<void> => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const task = storedTasks[i];
    if (!task) return;
    if (task.boardId === boardId) {
      storedTasks.splice(i, 1);
      i -= 1;
    }
  }
};

export const unassignUser = async (userId: string): Promise<void> => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const task = storedTasks[i];
    if (!task) return;
    if (task.userId === userId) {
      task.userId = null;
    }
  }
};
