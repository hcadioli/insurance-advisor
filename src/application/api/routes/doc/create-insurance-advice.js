const httpStatus = require('http-status-codes');
const { PersonalInformation } = require('../../../../domain/personal-information');
const { InsuranceAdvice } = require('../../../../domain/insurance-advice');

module.exports = Object.freeze({
  tags: ['InsuranceAdvice'],
  groups: 'private',
  summary: 'Creates Insurance Advice',
  requestBody: {
    required: true,
    description: 'User Personal Information',
    content: {
      'application/json': {
        schema: PersonalInformation.PersonalInformationSchema,
      },
    },
  },
  responses: {
    [httpStatus.CREATED]: {
      description: 'Insurance Advice Created',
      content: {
        'application/json': {
          schema: InsuranceAdvice.InsuranceAdviceSchema,
        },
      },
      [httpStatus.UNPROCESSABLE_ENTITY]: {
        description: 'Insurance Advice Created',
        content: {
          'application/json': {
            schema: InsuranceAdvice.InsuranceAdviceSchema,
          },
        },
      }
    }
  }
});
