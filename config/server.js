module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL', 'https://scary-hollow-87865.herokuapp.com'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dd14111834fd34a295f3828752bb9da0'),
    },
  },
});
