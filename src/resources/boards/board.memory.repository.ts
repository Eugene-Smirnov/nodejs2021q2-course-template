import { Board } from './board.model';
import { removeByBoardId as removeBoardTasks } from '../tasks/task.memory.repository';

const storedBoards = [];

export const getAll = async (): Promise<Board[]> => storedBoards as Board[];

export const getById = async (id: string): Promise<Board> =>
  storedBoards.find((board) => board.id === id);

export const create = async (boardDto: Board): Promise<Board> => {
  const board = new Board(boardDto);
  storedBoards.push(board);
  return board;
};

export const update = async (
  id: string,
  boardUpdateDto: Board
): Promise<Board> => {
  const board = await getById(id);
  const updatedBoard = new Board({ ...board, ...boardUpdateDto });
  Object.assign(board, boardUpdateDto);
  return updatedBoard;
};

export const remove = async (id: string): Promise<void> => {
  const index = storedBoards.findIndex((board) => board.id === id);
  await removeBoardTasks(id);
  storedBoards.splice(index, 1);
};
