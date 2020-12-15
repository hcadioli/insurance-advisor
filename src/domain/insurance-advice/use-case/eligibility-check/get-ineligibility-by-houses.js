const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetIneligibilityByHouses {
  execute(personalInformation) {
    const { house } = personalInformation;

    const ineligibilityLines = {
      home: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(house)) {
      return !house.length ? ineligibilityLines : {};
    }

    return !house ? ineligibilityLines : {};
  }
};
