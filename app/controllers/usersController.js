const mongoose = require('mongoose');

const User = mongoose.model('User');

async function create(req, res, next) {
  try {
    const user = new User({
      name: req.body.name,
      password: req.body.password,
    });

    await user.save((err, user) => {
      if (err) return err;

      res.send(user);
    });
  } catch (err) {
    next(err);
  }
}

function login(req, res, next) {
  User.findOne({ name: req.body.name })
    .then(user => {
      if (user.password === req.body.password) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch(err => next(err));
}

module.exports = { create, login };
