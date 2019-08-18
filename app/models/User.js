const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  password: String,
});

module.exports = { User: mongoose.model('User', userSchema) };
