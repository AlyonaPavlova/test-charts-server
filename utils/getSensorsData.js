const shortid = require('shortid');

const defaultSensorsData = require('../config/defaultSensorsData');

const createSensorsByType = type => {
  const id = shortid.generate();
  let data = [];

  defaultSensorsData.forEach(arrByTime => {
    const lastItem = arrByTime.pop();

    data.push({
      date: lastItem[0],
      value: lastItem[1],
    })
  });

  return {
    name: `${type} sensor ${id}`,
    type,
    data,
  };
};

let sensors = [];

for (let i = 0; i < 5; i++) {
  const tmpSensor = createSensorsByType('temperature');
  const humSensor = createSensorsByType('humidity');
  const lightSensor = createSensorsByType('light');

  sensors = [...sensors, tmpSensor, humSensor, lightSensor];
}

module.exports = sensors;
