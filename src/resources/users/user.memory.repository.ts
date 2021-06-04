import { User } from './user.model';
import { unassignUser } from '../tasks/task.memory.repository';

const storedUsers = [];

export const getAll = async (): Promise<User[]> => storedUsers;

export const getById = async (id: string): Promise<User> =>
  storedUsers.find((user) => user.id === id);

export const create = async (userDto: User): Promise<User> => {
  const user = new User(userDto);
  storedUsers.push(user);
  return user;
};

export const update = async (
  id: string,
  userUpdateDto: User
): Promise<User> => {
  const user = await getById(id);
  const updatedUser = new User({ ...user, ...userUpdateDto });
  Object.assign(user, userUpdateDto);
  return updatedUser;
};

export const remove = async (id: string): Promise<void> => {
  const index = storedUsers.findIndex((user) => user.id === id);
  await unassignUser(id);
  storedUsers.splice(index, 1);
};
