import { Router } from 'express';
import { Task } from './task.model';
import * as tasksService from './task.service';

export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId);
  if (!task) {
    res.status(404).json({ status: 'Not Found' });
  } else {
    res.status(200).json(task);
  }
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params as Task;

  // we didn't handle cases of trying creating tasks without board
  if (!boardId) return;

  const task = await tasksService.create(req.body, boardId);
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId } = req.params;
  const taskUpdateDto = req.body;
  const updatedTask = await tasksService.update(taskId, taskUpdateDto);
  res.status(200).json(updatedTask);
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId);
  if (!task) {
    res.status(404).json({ status: 'Not Found' });
    return;
  }
  await tasksService.remove(taskId);
  res.status(200).json({ status: 'Task deleted succesfully!' });
});
