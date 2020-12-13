const httpStatus = require('http-status-codes');
const { logger } = require('../logger');
const Adapter = require('./adapter');

async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (error) {
    const handledError = {
      message: error.message,
      field: error.field,
      values: error.values
    };

    if (Adapter.ErrorCodesPerName[error.constructor.name]) {
      handledError.code = Adapter.ErrorCodesPerName[error.constructor.name];
      handledError.status = Adapter.StatusCodePerErrorCode[handledError.code];
    }

    ctx.response.status = handledError.status || httpStatus.INTERNAL_SERVER_ERROR;
    ctx.response.body = handledError;

    logger.fatal({
      error
    });
  }
}

module.exports = errorHandler;
