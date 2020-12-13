const httpStatus = require('http-status-codes');
const { UserPersonalInformationSchema } = require('../../../../domain/personal-information');
const { InsuranceAdviceSchema } = require('../../../../domain/insurance-advice');

module.exports = Object.freeze({
  tags: ['InsuranceAdvice'],
  groups: 'private',
  summary: 'Creates Insurance Advice',
  requestBody: {
    required: true,
    description: 'User Personal Information',
    content: {
      'application/json': {
        schema: UserPersonalInformationSchema,
      },
    },
  },
  responses: {
    [httpStatus.CREATED]: {
      description: 'Insurance Advice Created',
      content: {
        'application/json': {
          schema: InsuranceAdviceSchema,
        },
        [httpStatus.UNPROCESSABLE_ENTITY]: responses({
          statusCode: httpStatus.UNPROCESSABLE_ENTITY,
        }),
      },
    }
  }
});

