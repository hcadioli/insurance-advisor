const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetInegibilityByHouses {
  execute(personalInformation) {
    const { house } = personalInformation;

    const inegibilityLines = {
      home: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(house)) {
      return !house.length ? inegibilityLines : {};
    }

    return !house ? inegibilityLines : {};
  }
};
