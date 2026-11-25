const { Router } = require('express');
const {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getUserById,
} = require('../controllers/userController');
const { validateUserToken } = require('../auth/user-service');
const { isAdmin } = require('../auth/isAdmin');

const userRegister = Router();

userRegister.route('/').get(getUsers).post(registerUser);

userRegister
  .route('/:id')
  .put(updateUser)
  .delete([validateUserToken, isAdmin], deleteUser)
  .get([validateUserToken, isAdmin], getUserById);

userRegister.route('/login').post(loginUser);

userRegister.route('/logout').post(logoutUser);

module.exports = userRegister;
