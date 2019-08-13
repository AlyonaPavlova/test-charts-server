const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  date: Number,
  value: Number
});

const sensorSchema = new Schema({
  name: String,
  type: String,
  data: [dataSchema]
});

module.exports = { Sensor: mongoose.model('Sensor', sensorSchema) };
