import { Router } from 'express';
import HttpException from '../../exceptions/HttpException';
import { User } from './user.model';
import * as usersService from './user.service';

export const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res, next) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId);
  if (!user) next(new HttpException(404, 'Not found'));
  else res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const userUpdateDto = req.body;
  const updatedUser = await usersService.update(userId, userUpdateDto);
  res.status(200).json(User.toResponse(updatedUser));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.remove(userId);
  res.status(200).json({ status: 'User deleted succesfully!' });
});
