const Config = require('../config/index');

const Codes = Object.freeze({
  server: {
    INTERNAL_SERVER_ERROR: `${Config.server.errorPrefix}SVR0001`,
    BAD_REQUEST: `${Config.server.errorPrefix}SVR0002`,
  },
  personalInformation: {
    VALIDATION_ERROR: `${Config.server.errorPrefix}PER0001`,
  },
});

module.exports = {
  Codes
};
