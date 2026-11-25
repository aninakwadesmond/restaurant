const {
  registerUserService,
  getUsersServices,
  logoutUserServer,
  loginUserService,
  updateUserServer,
  deleteUserServices,
  getUserByIdServer,
} = require('../services/user-service');

async function getUsers(req, res) {
  getUsersServices(req, res);
}
async function getUserById(req, res) {
  getUserByIdServer(req, res);
}

async function registerUser(req, res) {
  registerUserService(req.body, req, res);
  // return res.status(200).json(req.body);
}
async function updateUser(req, res) {
  updateUserServer(req, res);
}
async function deleteUser(req, res) {
  deleteUserServices(req, res);
}
async function loginUser(req, res) {
  loginUserService(req, res);
}
async function logoutUser(req, res) {
  logoutUserServer(req, res);
}

module.exports = {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getUserById,
};
