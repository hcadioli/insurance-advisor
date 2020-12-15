const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetIneligibilityByAge {
  execute(personalInformation) {
    const { age } = personalInformation;
    const ageLimit = InsuranceAdvice.UserAges.sixty;

    const ineligibilityLines = {
      disability: InsuranceAdvice.InsuranceLevels.Ineligible,
      life: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    return age >= ageLimit ? ineligibilityLines : {};
  }
};
