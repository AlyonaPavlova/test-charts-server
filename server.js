const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const config = require('./config/');
const { Sensor } = require('./app/models/Sensor');
const sensors = require('./utils/getSensorsData');

// Require routing
const { router } = require('./app/routes/');

// Set up mongodb
mongoose.connect(config.db('localhost', 27017, 'test-charts'), { useNewUrlParser: true });

Sensor.insertMany(sensors)
  .then(() => {
    console.log('Sensors successfully created!');

    mongoose.disconnect();
  })
  .catch(err => console.log('Error saving sensors', err));

mongoose.connection.on("open", () => {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", (err) => {
  console.log("Could not connect to mongo server! " + err);
});

const app = express();

// Handle CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Request-Method', 'GET, POST, PUT, DELETE');
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.use(router);

// Error handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.status(err.status).json({
    message: err.message
  });
});

app.listen(config.app.port, config.app.address, () => {
  console.log(`App running at port ${config.app.port}`);
});
