import * as boardsRepo from './board.memory.repository';

export const getAll = async () => boardsRepo.getAll();

export const getById = async (id) => boardsRepo.getById(id);

export const create = async (boardDto) => boardsRepo.create(boardDto);

export const update = async (id, boardUpdateDto) =>
  boardsRepo.update(id, boardUpdateDto);

export const remove = async (id) => boardsRepo.remove(id);
