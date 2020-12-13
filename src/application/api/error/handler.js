const httpStatus = require('http-status-codes');
const { logger } = require('../logger');

async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (error) {
      ctx.response.status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
      ctx.response.body = error.message;

      logger.fatal({
        err: error
      });
    }
  }

module.exports = errorHandler;
