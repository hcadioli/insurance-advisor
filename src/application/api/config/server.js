const env = require('env-var');

const { name, version, description } = require('../../../../package.json');

const server = Object.freeze({
  name,
  version,
  description,
  port: env.get('PORT').asIntPositive() || 3000,
  logs: {
    name: 'INSURANCE-ADVISOR',
    level: env.get('LOG_LEVEL').asString() || 'info',
  },
  errorAcronym: 'INS',
});

module.exports = server;
