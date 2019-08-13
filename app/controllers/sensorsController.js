const mongoose = require('mongoose');

const { Sensor } = require('../models/Sensor');
const config = require('../../config/');

async function create (req, res, next) {
  try {
  } catch (err) {
    next(err);
  }
}

async function getAllSensors (req, res, next) {
  try {
    mongoose.connect(config.db('localhost', 27017, 'test-charts'), { useNewUrlParser: true });

    return await Sensor.find({});
  } catch (err) {
    next(err);
  }
}

module.exports = getAllSensors;
