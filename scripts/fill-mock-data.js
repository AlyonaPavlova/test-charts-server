const mongoose = require('mongoose');

const config = require('../config');
const { Sensor } = require('../app/models/Sensor');
const sensors = require('../utils/getSensorsData');

mongoose
  .connect(config.db('localhost', 27017, 'test-charts'), { useNewUrlParser: true })
  .then(() => {
    console.log('New DB "test-charts" successfully created!');

    Sensor.insertMany(sensors)
      .then(() => {
        console.log('Sensors successfully created!');

        mongoose.disconnect();
      })
      .catch(err => console.log('Error creating sensors', err));
  });
