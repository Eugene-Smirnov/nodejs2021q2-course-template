const Board = require('./board.model');

const storedBoards = [];

const getAll = async () => storedBoards;

const getById = async (id) => storedBoards.find(board => board.id === id);

const create = async (boardDto) => {
  const board = new Board(boardDto);
  storedBoards.push(board);
  return board;
};

const update = async (id, boardUpdateDto) => {
  const board = await getById(id);
  const updatedBoard = new Board({...board, ...boardUpdateDto });
  Object.assign(board, boardUpdateDto);
  return updatedBoard;
};

const remove = async (id) => {
  const index = storedBoards.findIndex(board => board.id === id);
  storedBoards.splice(index, 1);
};

module.exports = ({ getAll, getById, create, update, remove });