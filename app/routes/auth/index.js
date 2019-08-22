const User = require('../../controllers/usersController');

module.exports = app => {
  app.post('/login', async (req, res, next) => {
    await User.login(req, res, next);
  });

  app.post('/signup', async (req, res, next) => {
    await User.create(req, res, next);
  });
};

