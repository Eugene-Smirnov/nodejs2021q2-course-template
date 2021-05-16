const Task = require('./task.model');

const storedTasks = [];

const getAll = async () => storedTasks;

const getById = async (id) => storedTasks.find((task) => task.id === id);

const create = async (taskDto) => {
  const task = new Task(taskDto);
  storedTasks.push(task);
  return task;
};

const update = async (id, taskUpdateDto) => {
  const task = await getById(id);
  const updatedTask = new Task({ ...task, ...taskUpdateDto });
  Object.assign(task, taskUpdateDto);
  return updatedTask;
};

const remove = async (id) => {
  const index = storedTasks.findIndex((task) => task.id === id);
  storedTasks.splice(index, 1);
};

module.exports = { getAll, getById, create, update, remove };