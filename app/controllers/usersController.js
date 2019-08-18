const mongoose = require('mongoose');

const config = require('../../config/');
const { User } = require('../models/User');

async function create(req, res, next) {
  try {
    mongoose
      .connect(config.db('localhost', 27017, 'test-charts'), {
        useNewUrlParser: true,
      })
      .then(() => {
        const user = new User({
          name: req.body.name,
          password: req.body.password,
        });

        user.save((err, user) => {
          if (err) return err;

          mongoose.disconnect();

          res.send(user);
        });
      });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    mongoose
      .connect(config.db('localhost', 27017, 'test-charts'), {
        useNewUrlParser: true,
      })
      .then(() => {
        User.findOne({ name: req.body.name }).then(user => {
          mongoose.disconnect();

          if (user.password === req.body.password) {
            res.send(true);
          } else {
            res.send(false);
          }
        });
      });
  } catch (err) {
    next(err);
  }
}

module.exports = { create, login };
