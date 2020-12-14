const InsuranceAdvice = require('../insurance-advice');

module.exports = class ProcessRiskScoreToInsuranceAdvice {
  processInsuranceLineScore(score) {
    const {
      economicRange,
      responsibleRange,
      regularRange
    } = InsuranceAdvice.RiskScoreRanges;

    const {
      Economic,
      Responsible,
      Regular
    } = InsuranceAdvice.InsuranceLevels;

    if (score <= economicRange.end) {
      return Economic;
    }

    if (regularRange.end >= score && score >= regularRange.start) {
      return Regular;
    }

    if (score >= responsibleRange.start) {
      return Responsible;
    }

    return '';
  }

  execute(riskScores) {
    const insuranceAdvice = {};

    Object.keys(riskScores).forEach((category) => {
      insuranceAdvice[category] = this
        .processInsuranceLineScore(riskScores[category]);
    });

    return insuranceAdvice;
  }
};
