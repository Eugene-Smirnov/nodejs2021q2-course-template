import * as boardsRepo from './board.memory.repository';
import { Board } from './board.model';

export const getAll = async (): Promise<Board[]> => boardsRepo.getAll();

export const getById = async (id: string): Promise<Board> =>
  boardsRepo.getById(id);

export const create = async (boardDto: Board): Promise<Board> =>
  boardsRepo.create(boardDto);

export const update = async (
  id: string,
  boardUpdateDto: Board
): Promise<Board> => boardsRepo.update(id, boardUpdateDto);

export const remove = async (id: string): Promise<void> =>
  boardsRepo.remove(id);
