module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6418f00faf78b74ded3a60f491403533'),
  },
});
