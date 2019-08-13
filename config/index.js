module.exports = {
  app: {
    address: '127.0.0.1',
    port: process.env.PORT || 5000
  },
  db: (address, port, collectionName) => {
    return `mongodb://${address}:${port}/${collectionName}`;
  }
};
