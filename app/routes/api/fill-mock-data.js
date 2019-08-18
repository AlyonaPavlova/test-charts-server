const cp = require('child_process');
const { path } = require('app-root-path');

module.exports = app => {
  app.get('/fill-mock-data', (req, res) => {
    const process = cp.fork(path + '/fill-mock-data.js');

    process.on('error', err => {
      if (err) {
        new Error(`Error ${err}`);
      }
    });

    process.on('exit', code => {
      const err = code === 0 ? null : new Error(`exit code ${code}`);

      if (err) {
        new Error(`Error ${err}`);
      } else {
        res.send('success');
      }
    });
  });
};

