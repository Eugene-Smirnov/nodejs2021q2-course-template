const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const getById = async (id) => usersRepo.getById(id);

const create = async (userDto) => usersRepo.create(userDto);

const update = async (id, userUpdateDto) => usersRepo.update(id, userUpdateDto);

const remove = async (id) => usersRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
