const express = require('express');
const router = express.Router();

const getAllSensors = require('../controllers/sensorsController');

router.route('/sensorsData')
  .get(async (req, res) => {
    const sensors = await getAllSensors();

    res.send(sensors);
  })
  .post();

module.exports = { router };
