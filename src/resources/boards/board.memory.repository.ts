import { Board } from './board.model';
import { removeByBoardId as removeBoardTasks } from '../tasks/task.memory.repository';

export const getAll = async (): Promise<Board[]> => Board.find();

export const getById = async (id: string): Promise<Board | undefined> =>
  Board.findOne(id);

export const create = async (boardDto: Board): Promise<Board> => {
  const board = new Board(boardDto);
  await board.save();
  return board;
};

export const update = async (
  id: string,
  boardUpdateDto: Board
): Promise<Board> => {
  const board = await getById(id);
  const updatedBoard = new Board({ ...board, ...boardUpdateDto });
  await Board.update(id, updatedBoard);
  return updatedBoard;
};

export const remove = async (id: string): Promise<void> => {
  const removedBoard = await getById(id);
  if (!removedBoard) throw new Error('Board not found!');
  await removeBoardTasks(id);
  Board.remove(removedBoard);
};
