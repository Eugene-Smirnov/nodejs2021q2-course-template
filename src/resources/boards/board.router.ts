import { Router } from 'express';
import HttpException from '../../exceptions/HttpException';
import * as boardsService from './board.service';

export const router = Router();

router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req, res, next) => {
  const { boardId } = req.params;
  const board = await boardsService.getById(boardId);
  if (!board) {
    next(new HttpException(404, 'Not found'));
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

router.route('/:boardId').delete(async (req, res, next) => {
  const { boardId } = req.params;
  const board = await boardsService.getById(boardId);
  if (!board) {
    next(new HttpException(404, 'Not found'));
  } else {
    await boardsService.remove(boardId);
    res.status(200).json({ status: 'Board deleted succesfully!' });
  }
});
