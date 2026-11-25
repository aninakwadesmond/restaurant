const jwt = require('jsonwebtoken');
const { Users } = require('../models/user-model');

async function validateUserToken(req, res, next) {
  console.log(req);
  const token = req.cookies?.jwt || req.cookies?.token;
  console.log(token, req.cookies, req.cookie);

  if (!token)
    return res
      .status(403)
      .json({ success: false, message: 'Unauthorized. Please login ' });

  // decode the token
  try {
    const decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

    console.log('decoded token', decode);

    // const user = await Users.findById(decode.id);

    // console.log('user', user);
    req.user = decode;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid token or token expired' });
  }
}

module.exports = { validateUserToken };
