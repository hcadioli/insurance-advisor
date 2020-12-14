const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetRiskScoreByDependents {
  execute(personalInformation) {
    const { dependents } = personalInformation;
    const riskScoreByDependents = {
      disability: InsuranceAdvice.RiskScoreUnits.addUnit,
      life: InsuranceAdvice.RiskScoreUnits.addUnit,
    };

    if (Array.isArray(dependents)) {
      return dependents.length ? riskScoreByDependents : {};
    }

    return dependents ? riskScoreByDependents : {};
  }
};
