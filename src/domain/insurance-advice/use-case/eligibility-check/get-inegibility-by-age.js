const InsuranceAdvisor = require('../../insurance-advice');

module.exports = class GetInegibilityByAge {
  execute(personalInformation) {
    const { age } = personalInformation;
    const AGE_LIMIT = 60;

    const inegibilityLines = {
      disability: InsuranceAdvisor.InsuranceLevels.Ineligible,
      life: InsuranceAdvisor.InsuranceLevels.Ineligible,
    };

    return age >= AGE_LIMIT ? inegibilityLines : {};
  }
};
