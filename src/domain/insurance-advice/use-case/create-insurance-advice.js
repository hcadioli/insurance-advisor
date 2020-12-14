module.exports = class CreateInsuranceAdvice {
  constructor({
    CalculateRiskScore,
    ProcessRiskScoreToInsuranceAdvice,
    GetIneligibleLinesOfInsurance
  }) {
    this.CalculateRiskScore = CalculateRiskScore;
    this.ProcessRiskScoreToInsuranceAdvice = ProcessRiskScoreToInsuranceAdvice;
    this.GetIneligibleLinesOfInsurance = GetIneligibleLinesOfInsurance;
  }

  execute(personalInformation) {
    const riskScores = this
      .CalculateRiskScore.execute(personalInformation);

    const processedRiskScores = this
      .ProcessRiskScoreToInsuranceAdvice.execute(riskScores);

    const ineligibleLines = this
      .GetIneligibleLinesOfInsurance.execute(personalInformation);

    const insuranceAdvice = {
      ...processedRiskScores,
      ...ineligibleLines
    };

    return insuranceAdvice;
  }
};
