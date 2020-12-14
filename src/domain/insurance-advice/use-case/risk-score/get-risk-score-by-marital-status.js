const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetRiskScoreByMarritalStatus {
  execute(personalInformation) {
    const { marital_status: maritalStatus } = personalInformation;
    const { married } = InsuranceAdvice.MaritalStatuses;

    const riskScoreByMaritalStatus = {
      disability: InsuranceAdvice.RiskScoreUnits.deductUnit,
      life: InsuranceAdvice.RiskScoreUnits.addUnit,
    };

    return maritalStatus === married ? riskScoreByMaritalStatus : {};
  }
};
