const getAllSensors = require('../../controllers/sensorsController');

module.exports = app => {
  app.get('/api/sensors',
    async (req, res) => {
      const sensors = await getAllSensors();

      res.send(sensors);
    });

  app.route('/api/sensors/new')
    .get()
    .post();
};

