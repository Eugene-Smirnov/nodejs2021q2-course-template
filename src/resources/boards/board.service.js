const boardsRepo = require('./board.memory.repository');

const getAll = async () => boardsRepo.getAll();

const getById = async (id) => boardsRepo.getById(id);

const create = async (boardDto) => boardsRepo.create(boardDto);

const update = async (id, boardUpdateDto) => boardsRepo.update(id, boardUpdateDto);

const remove = async (id) => boardsRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };