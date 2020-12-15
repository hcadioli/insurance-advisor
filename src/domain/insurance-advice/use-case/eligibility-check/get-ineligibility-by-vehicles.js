const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetInegibilityByVehicles {
  execute(personalInformation) {
    const { vehicle } = personalInformation;

    const inegibilityLines = {
      auto: InsuranceAdvice.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(vehicle)) {
      return !vehicle.length ? inegibilityLines : {};
    }

    return !vehicle ? inegibilityLines : {};
  }
};
