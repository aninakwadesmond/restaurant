async function isAdmin(req, res, next) {
  const { role } = req.user;

  if (role !== 'admin')
    return res.status(403).json({
      sucess: false,
      message: 'Only admin can perform this operation',
    });

  next();
}

module.exports = { isAdmin };
