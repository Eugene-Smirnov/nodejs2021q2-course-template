import * as usersRepo from './user.memory.repository';
import { User } from './user.model';

export const getAll = async (): Promise<User[]> => usersRepo.getAll();

export const getById = async (id: string): Promise<User> =>
  usersRepo.getById(id);

export const create = async (userDto: User): Promise<User> =>
  usersRepo.create(userDto);

export const update = async (id: string, userUpdateDto: User): Promise<User> =>
  usersRepo.update(id, userUpdateDto);

export const remove = async (id: string): Promise<void> => usersRepo.remove(id);
