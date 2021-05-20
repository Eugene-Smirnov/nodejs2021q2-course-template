const Task = require('./task.model');

const storedTasks = [];

const getAll = async () => storedTasks;

const getById = async (id) => storedTasks.find((task) => task.id === id);

const create = async (taskDto, boardId) => {
  const task = new Task(taskDto);
  task.boardId = boardId;
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

const removeByBoardId = async (boardId) => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const task = storedTasks[i];
    if (task.boardId === boardId) {
      storedTasks.splice(i, 1);
      i -= 1;
    }
  }
};

const unassignUser = async (userId) => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const task = storedTasks[i];
    if (task.userId === userId) {
      task.userId = null;
    }
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeByBoardId,
  unassignUser,
};
