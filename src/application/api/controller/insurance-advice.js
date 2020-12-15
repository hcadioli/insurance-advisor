const httpStatus = require('http-status-codes');

module.exports = class InsuranceAdvice {
  constructor({
    UseCase,
    Serializer
  }) {
    this.CreateInsuranceAdvice = UseCase.CreateInsuranceAdvice;
    this.Serializer = Serializer;
  }

  create(ctx) {
    const personalInformation = this.Serializer.PersonalInformation.serialize(ctx.request.body);
    const insuranceAdvice = this.CreateInsuranceAdvice.execute(personalInformation);

    ctx.response.status = httpStatus.OK;
    ctx.response.body = this.Serializer.InsuranceAdvice.serialize(insuranceAdvice);
  }
};
