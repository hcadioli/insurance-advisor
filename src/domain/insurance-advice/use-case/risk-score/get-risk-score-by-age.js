const {
  UserAges,
  RiskScoreUnits
} = require('../../insurance-advice');

module.exports = class GetRiskScoreByAge {
  getRiskScoresBetweenThirtyAndForty(age) {
    if (UserAges.forty > age && age >= UserAges.thirty) {
      return {
        auto: RiskScoreUnits.deductUnit,
        disability: RiskScoreUnits.deductUnit,
        home: RiskScoreUnits.deductUnit,
        life: RiskScoreUnits.deductUnit,
      };
    }

    return {};
  }

  getRiskScoresUnderThirty(age) {
    if (UserAges.thirty > age) {
      return {
        auto: RiskScoreUnits.deductTwoUnits,
        disability: RiskScoreUnits.deductTwoUnits,
        home: RiskScoreUnits.deductTwoUnits,
        life: RiskScoreUnits.deductTwoUnits,
      };
    }

    return {};
  }

  execute(personalInformation) {
    const { age } = personalInformation;

    const adultRiskScore = this.getRiskScoresBetweenThirtyAndForty(age);
    const youngRiskScore = this.getRiskScoresUnderThirty(age);

    return {
      ...adultRiskScore,
      ...youngRiskScore
    };
  }
};
