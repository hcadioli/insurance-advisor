const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetInegibilityByIncome {
  execute(personalInformation) {
    const { income } = personalInformation;

    const inegibilityLines = {
      disability: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    return !income ? inegibilityLines : {};
  }
};
