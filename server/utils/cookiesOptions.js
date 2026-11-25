const isProd = process.env.NODE_ENV === 'production';

console.log('node environment', isProd);

const cookiesOptions = {
  httpOnly: true,
  sameSite: isProd ? 'none' : 'lax',
  secure: isProd,
  maxAge: 24 * 60 * 60 * 1000,
  path: '/',
};

module.exports = { cookiesOptions };
