const UseCase = require('./use-case');
const InsuranceAdviseController = require('../api/controller/insurance-advice');
const Serializer = require('../serializer');

function createInsuranceAdviceController() {
  return new InsuranceAdviseController({
    UseCase,
    Serializer
  });
}

module.exports = {
  insuranceAdvice: createInsuranceAdviceController(),
};
