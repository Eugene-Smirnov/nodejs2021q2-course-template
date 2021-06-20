import { Router } from 'express';
import HttpException from '../../exceptions/HttpException';
import { Task } from './task.model';
import * as tasksService from './task.service';

export const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res, next) => {
  const tasks = await tasksService.getAll().catch((e) => next(e));
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req, res, next) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId).catch((e) => next(e));
  if (!task) {
    next(new HttpException(404, 'Not found'));
  } else {
    res.status(200).json(task);
  }
});

router.route('/').post(async (req, res, next) => {
  const { boardId } = req.params as Task;

  // we didn't handle cases of trying creating tasks without board
  if (!boardId) {
    next(new HttpException(404, 'Board not found'));
    return;
  }

  const task = await tasksService
    .create(req.body, boardId)
    .catch((e) => next(e));
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req, res, next) => {
  const { taskId } = req.params;
  const taskUpdateDto = req.body;
  const updatedTask = await tasksService
    .update(taskId, taskUpdateDto)
    .catch((e) => next(e));
  res.status(200).json(updatedTask);
});

router.route('/:taskId').delete(async (req, res, next) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId).catch((e) => next(e));
  if (!task) {
    next(new HttpException(404, 'Not found'));
  }
  await tasksService.remove(taskId);
  res.status(200).json({ status: 'Task deleted succesfully!' });
});
