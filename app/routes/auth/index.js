const Users = require('../../controllers/usersController');

module.exports = app => {
  app.post('/login', async (req, res, next) => {
    await Users.login(req, res, next);
  });

  app.post('/signup', async (req, res, next) => {
    await Users.create(req, res, next);
  });
};

