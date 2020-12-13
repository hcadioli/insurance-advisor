module.exports = class CreateInsuranceAdvice {
  constructor(params = {}) {
    this.riskScoreMap = params.riskScoreMap;
  }

  async execute(riskScore) {
    const insuranceAdvice = this.riskScoreMap;

    return insuranceAdvice;
  }
}