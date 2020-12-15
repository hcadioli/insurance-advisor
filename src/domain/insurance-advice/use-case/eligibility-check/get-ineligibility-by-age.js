const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetInegibilityByAge {
  execute(personalInformation) {
    const { age } = personalInformation;
    const ageLimit = InsuranceAdvice.UserAges.sixty;

    const inegibilityLines = {
      disability: InsuranceAdvice.InsuranceLevels.Ineligible,
      life: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    return age >= ageLimit ? inegibilityLines : {};
  }
};
