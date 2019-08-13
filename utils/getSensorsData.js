const defaultSensorsData = require('../config/defaultSensorsData');

const createSensorsByType = (type, number) => {
  let data = [];

  defaultSensorsData.forEach(arrByTime => {
    const lastItem = arrByTime.pop();

    data.push({
      date: lastItem[0],
      value: lastItem[1],
    })
  });

  return {
    name: `${type} sensor ${number}`,
    type,
    data,
  };
};

let sensors = [];

for (let i = 0; i < 5; i++) {
  const tmpSensor = createSensorsByType('temperature', i);
  const humSensor = createSensorsByType('humidity', i);
  const lightSensor = createSensorsByType('light', i);

  sensors = [...sensors, tmpSensor, humSensor, lightSensor];
}

module.exports = sensors;
