const tasksRepo = require('./task.memory.repository');

const getAll = async () => tasksRepo.getAll();

const getById = async (id) => tasksRepo.getById(id);

const create = async (taskDto, boardId) => tasksRepo.create(taskDto, boardId);

const update = async (id, taskUpdateDto) => tasksRepo.update(id, taskUpdateDto);

const remove = async (id) => tasksRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
