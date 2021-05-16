const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId);
  res.status(200).json(task);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(req.body);
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
    res.status(404).json({ status: 'There is no task with such Id!' });
    return;
  }
  await tasksService.remove(taskId);
  res.status(200).json({ status: 'Task deleted succesfully!' });
});

module.exports = router;