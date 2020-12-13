const InsuranceAdvice = require('../../domain/insurance-advice');

const CreateInsuranceAdvice = new InsuranceAdvice.UseCase
  .CreateInsuranceAdvice();

module.exports = {
  CreateInsuranceAdvice
};
