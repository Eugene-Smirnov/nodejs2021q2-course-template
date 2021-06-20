import { Router } from 'express';
import HttpException from '../../exceptions/HttpException';
import { User } from './user.model';
import * as usersService from './user.service';

export const router = Router();

router.route('/').get(async (_req, res, next) => {
  const users = await usersService.getAll().catch((e) => next(e));
  // map user fields to exclude secret fields like "password"
  if (users) res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res, next) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId).catch((e) => next(e));
  if (!user) next(new HttpException(404, 'Not found'));
  else res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res, next) => {
  const user = await usersService.create(req.body).catch((e) => next(e));
  if (user) res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res, next) => {
  const { userId } = req.params;
  const userUpdateDto = req.body;
  const updatedUser = await usersService
    .update(userId, userUpdateDto)
    .catch((e) => next(e));
  if (updatedUser) res.status(200).json(User.toResponse(updatedUser));
});

router.route('/:userId').delete(async (req, res, next) => {
  const { userId } = req.params;
  await usersService.remove(userId).catch((e) => next(e));
  res.status(200).json({ status: 'User deleted succesfully!' });
});
