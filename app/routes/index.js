module.exports = app => {
  require('./api/chart')(app);
  require('./auth/index')(app);
  require('./fill-mock-data')(app);
};
