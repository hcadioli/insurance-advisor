const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetIneligibilityByVehicles {
  execute(personalInformation) {
    const { vehicle } = personalInformation;

    const ineligibilityLines = {
      auto: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(vehicle)) {
      return !vehicle.length ? ineligibilityLines : {};
    }

    return !vehicle ? ineligibilityLines : {};
  }
};
