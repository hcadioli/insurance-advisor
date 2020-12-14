const {
  IncomeLevels,
  RiskScoreUnits
} = require('../../insurance-advice');

module.exports = class GetRiskScoreByAge {
  getRiskScoresBetweenThirtyAndForty(income) {
    if (IncomeLevels.high <= income) {
      return {
        auto: RiskScoreUnits.deductUnit,
        disability: RiskScoreUnits.deductUnit,
        home: RiskScoreUnits.deductUnit,
        life: RiskScoreUnits.deductUnit,
      };
    }

    return {};
  }

  execute(personalInformation) {
    const { income } = personalInformation;

    const adultRiskScore = this.getRiskScoresBetweenThirtyAndForty(income);

    return adultRiskScore;
  }
};
