const mongoose = require('mongoose');

const Sensor = mongoose.model('Sensor');

async function getAllSensors(req, res, next) {
  try {
    return await Sensor.find({});
  } catch (err) {
    next(err);
  }
}

module.exports = getAllSensors;
