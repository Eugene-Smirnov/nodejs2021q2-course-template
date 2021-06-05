import * as tasksRepo from './task.memory.repository';
import { Task } from './task.model';

export const getAll = async (): Promise<Task[]> => tasksRepo.getAll();

export const getById = async (id: string): Promise<Task | undefined> =>
  tasksRepo.getById(id);

export const create = async (taskDto: Task, boardId: string): Promise<Task> =>
  tasksRepo.create(taskDto, boardId);

export const update = async (
  id: string,
  taskUpdateDto: Task
): Promise<Task | undefined> => tasksRepo.update(id, taskUpdateDto);

export const remove = async (id: string): Promise<void> => tasksRepo.remove(id);
