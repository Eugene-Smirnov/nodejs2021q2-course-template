import Board from './board.model';
import { removeByBoardId as removeBoardTasks } from '../tasks/task.memory.repository';

const storedBoards = [];

export const getAll = async () => storedBoards;

export const getById = async (id) =>
  storedBoards.find((board) => board.id === id);

export const create = async (boardDto) => {
  const board = new Board(boardDto);
  storedBoards.push(board);
  return board;
};

export const update = async (id, boardUpdateDto) => {
  const board = await getById(id);
  const updatedBoard = new Board({ ...board, ...boardUpdateDto });
  Object.assign(board, boardUpdateDto);
  return updatedBoard;
};

export const remove = async (id) => {
  const index = storedBoards.findIndex((board) => board.id === id);
  await removeBoardTasks(id);
  storedBoards.splice(index, 1);
};
