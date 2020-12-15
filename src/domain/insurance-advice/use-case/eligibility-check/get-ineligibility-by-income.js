const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetIneligibilityByIncome {
  execute(personalInformation) {
    const { income } = personalInformation;

    const ineligibilityLines = {
      disability: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    return !income ? ineligibilityLines : {};
  }
};
