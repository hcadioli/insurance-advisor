const httpStatus = require('http-status-codes');
const { Codes } = require('./codes');
const PersonalInformation = require('../../../domain/personal-information');

const ErrorCodesPerName = Object.freeze({
  [PersonalInformation.Error.InvalidPersonalInformation.name]:
    Codes.personalInformation.VALIDATION_ERROR,
});

const StatusCodePerErrorCode = Object.freeze({
  [Codes.server.INTERNAL_SERVER_ERROR]: httpStatus.INTERNAL_SERVER_ERROR,
  [Codes.server.BAD_REQUEST]: httpStatus.BAD_REQUEST,
  [Codes.personalInformation.VALIDATION_ERROR]: httpStatus.UNPROCESSABLE_ENTITY,
});

module.exports = {
  ErrorCodesPerName,
  StatusCodePerErrorCode,
};
