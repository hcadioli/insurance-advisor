const { InsuranceAdvice: { InsuranceAdviceSchema } } = require('../../domain/insurance-advice');
const { createSerializerBasedOn } = require('./serializer');

const InsuranceAdvice = createSerializerBasedOn(
  InsuranceAdviceSchema.properties
);

module.exports = InsuranceAdvice;
