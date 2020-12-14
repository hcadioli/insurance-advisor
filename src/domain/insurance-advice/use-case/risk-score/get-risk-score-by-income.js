const InsuranceAdvisor = require('../../insurance-advice');

module.exports = class GetInegibilityByIncome {
  execute(personalInformation) {
    const { income } = personalInformation;

    const inegibilityLines = {
      disability: InsuranceAdvisor.InsuranceLevels.Ineligible,
    };

    return !income ? inegibilityLines : {};
  }
};
