const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cors = require('cors');

const config = require('./config/');

// Require routing
const routes = require('./app/routes/');

// Set up mongodb
mongoose.connect(config.db('localhost', 27017, 'test-charts'), {
  useNewUrlParser: true,
});

mongoose.connection.on('open', () => {
  console.log('Connected to mongo server.');
});

mongoose.connection.on('error', err => {
  console.log('Could not connect to mongo server! ' + err);
});

const app = express();

// Handle CORS requests
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
routes(app);

// Error handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.status(err.status).json({
    message: err.message,
  });
});

app.listen(config.app.port, config.app.address, () => {
  console.log(`App running at port ${config.app.port}`);
});
