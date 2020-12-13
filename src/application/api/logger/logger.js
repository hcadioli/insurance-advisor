const bunyan = require('bunyan');
const { server } = require('../config');

const logger = bunyan.createLogger({
  name: server.logs.name,
  level: server.logs.level
});

module.exports = logger;
