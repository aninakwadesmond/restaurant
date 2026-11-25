const _ = require('lodash');
const mongoose = require('mongoose');

const { Users } = require('../models/user-model');
const {
  validateUser,
  validateUserLogin,
} = require('../validators/user-validator');
const { cookiesOptions } = require('../utils/cookiesOptions');

async function registerUserService(body, req, res) {
  const { error } = validateUser(body);

  if (error) {
    console.log('error', error, 'error-details', error.details);
    const errorsWithoutPassword = error.details
      .filter((detail) => detail.path[0] !== 'password')
      .map((detail) => ({
        field: detail.path[0],
        message: detail.message,
      }));

    const passwordErrors = error.details
      .filter((details) => details.path[0] === 'password')
      .reduce(
        (acc, cur) => {
          return {
            field: 'password',
            message: [...acc.message, cur.message],
            // .map((message) => message.replace(/^"password"\s*/, ''))
            // .map((mess) => mess.replace(/^should /, '')),
          };
        },
        { path: 'password', message: [] },
      );

    console.log('passwordError', passwordErrors);

    const errors = [...errorsWithoutPassword, passwordErrors].filter(
      (error) => error.message.length > 0,
    );

    return res.status(400).json({
      success: false,
      message: 'Validation  failed',
      errors,
      errorMessage: error['Error'],
    });
  }

  try {
    const { email, ghanaCard } = req.body;

    const userExist = await Users.findOne({ $or: [{ email }, { ghanaCard }] });
    if (userExist) {
      return res.status(401).json({
        success: false,
        message: 'user already exist in the database',
      });
    }

    // create new User if not exist;

    const user = await Users.create(
      _.pick(req.body, [
        'fullName',
        'email',
        'password',
        'phoneNumber',
        'ghanaCard',
      ]),
    );

    const token = user.genAuthToken();

    res.cookie('jwt', token, cookiesOptions);

    return res
      .status(200)
      .json({ success: true, message: 'User successfully created ', user });
  } catch (error) {
    return res
      .status(400)
      .json({ sucess: false, message: error?.message || error });
  }
}

async function getUsersServices(req, res) {
  const reqObj = req.query;

  const pages = reqObj?.pages || 1;
  const limit = reqObj.limit || 5;
  let skip = (pages - 1) * limit;

  const result = await Users.countDocuments();

  if (skip >= result) {
    skip = 1;
  }

  try {
    const getAllUsers = await Users.find().skip(skip).limit(limit);

    return res.status(200).json({ success: true, result, data: getAllUsers });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: 'failed to get data' });
  }
}

async function logoutUserServer(req, res) {
  res.clearCookie('jwt', { ...cookiesOptions, maxAge: undefined });

  return res
    .status(200)
    .json({ success: true, message: 'successfully logout' });
}

async function loginUserService(req, res) {
  // recieve email, password, ghanacard
  const { error } = validateUserLogin(req.body);
  if (error) {
    const errorWithoutPasseord = error.details
      .filter((detail) => detail.path[0] !== 'passwords')
      .map((detail) => ({ field: detail.path[0], message: detail.message }));

    const errorPassword = error.details
      .filter((detail) => detail.path[0] === 'password')
      .map((detail) => ({ field: detail.path[0], message: detail.message }))
      .reduce(
        (acc, cur) => ({
          field: 'password',
          message: [...acc.message, cur.message],
        }),
        { field: 'password', message: [] },
      );

    const errors = [...errorWithoutPasseord, errorPassword].filter(
      (error) => error.message.length > 0,
    );

    return res
      .status(400)
      .json({ success: false, message: 'failed validation', errors });
  }

  // userexist?

  const { email, password } = req.body;
  try {
    const userExist = await Users.findOne({ $or: [{ email }, { password }] });

    if (!userExist)
      return res
        .status(400)
        .json({ success: false, message: 'Invalid emial or password' });

    console.log('before password', userExist);
    const isSamePassword = await userExist.comparePassword(password);
    console.log('after password', isSamePassword);

    if (!isSamePassword)
      return res
        .status(400)
        .json({ success: false, message: 'Invalid2 emial or password' });

    const token = userExist.genAuthToken();
    console.log('token', token);

    res.cookie('jwt', token, cookiesOptions);

    return res
      .status(200)
      .json({ success: true, message: 'Successfully login' });
  } catch (error) {
    return res
      .status(400)
      .json({ success: true, message: error?.message || error });
  }

  // return res.status(200).send('pass');
}

async function getUserByIdServer(req, res) {
  const params = req.params;

  if (!mongoose.isObjectIdOrHexString(params.id)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid mongoose id' });
  }

  const { id } = req.params;
  try {
    const user = await Users.findById(id);

    return res.status(200).json({ suceess: true, data: user });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: error?.message || error });
  }
}

async function updateUserServer(req, res) {
  const params = req.params;

  if (!mongoose.isObjectIdOrHexString(params.id))
    return res
      .status(400)
      .json({ success: false, message: 'Invalid mongoose id' });

  const { id } = req.params;

  try {
    const data = await Users.findById(id);
    if (!data)
      return res
        .status(400)
        .json({ success: false, message: 'User does not exist' });

    const updatedUser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ success: true, message: 'user succefully updated', updatedUser });
  } catch (error) {
    return res.status(400).json({ succes: false, message: error?.message });
  }
}

async function deleteUserServices(req, res) {
  if (!mongoose.isObjectIdOrHexString(req.params.id))
    return res
      .status(400)
      .json({ success: false, message: 'Invalid mongoose Id' });

  const { id } = req.params;

  try {
    const userExist = await Users.findById(id);
    if (!userExist)
      return res
        .status(400)
        .json({ status: false, message: 'User does not exist !' });
    await Users.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: 'User successfully removed' });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: error.message || error });
  }
}

module.exports = {
  registerUserService,
  getUsersServices,
  logoutUserServer,
  loginUserService,
  getUserByIdServer,
  updateUserServer,
  deleteUserServices,
};
