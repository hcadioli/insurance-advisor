const InsuranceAdvisor = require('../../insurance-advice');

module.exports = class GetInegibilityByHouses {
  execute(personalInformation) {
    const { house } = personalInformation;

    const inegibilityLines = {
      home: InsuranceAdvisor.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(house)) {
      return !house.length ? inegibilityLines : {};
    }

    return !house ? inegibilityLines : {};
  }
};
