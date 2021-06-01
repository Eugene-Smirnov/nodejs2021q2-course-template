const User = require('./user.model');

const storedUsers = [];

const { unassignUser } = require('../tasks/task.memory.repository');

const getAll = async () => storedUsers;

const getById = async (id) => storedUsers.find(user => user.id === id);

const create = async (userDto) => {
  const user = new User(userDto);
  storedUsers.push(user);
  return user;
};

const update = async (id, userUpdateDto) => {
  const user = await getById(id);
  const updatedUser = new User({...user, ...userUpdateDto });
  Object.assign(user, userUpdateDto);
  return updatedUser;
};

const remove = async (id) => {
  const index = storedUsers.findIndex(user => user.id === id);
  await unassignUser(id);
  storedUsers.splice(index, 1);
};

module.exports = { getAll, getById, create, update, remove };
