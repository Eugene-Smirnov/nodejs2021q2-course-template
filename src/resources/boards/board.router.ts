import { Router } from 'express';
import * as boardsService from './board.service';

const router = Router();

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardsService.getById(boardId);
  if (!board) {
    res.status(404).json({ status: 'Not found' });
  } else {
    res.status(200).json(board);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const boardUpdateDto = req.body;
  const updatedBoard = await boardsService.update(boardId, boardUpdateDto);
  res.status(200).json(updatedBoard);
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardsService.getById(boardId);
  if (!board) {
    res.status(404).json({ status: 'Not found' });
  } else {
    await boardsService.remove(boardId);
    res.status(200).json({ status: 'Board deleted succesfully!' });
  }
});

export default { router };
