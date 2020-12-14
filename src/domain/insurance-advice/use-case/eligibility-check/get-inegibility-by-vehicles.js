const InsuranceAdvisor = require('../../insurance-advice');

module.exports = class GetInegibilityByVehicles {
  execute(personalInformation) {
    const { vehicle } = personalInformation;

    const inegibilityLines = {
      auto: InsuranceAdvisor.InsuranceLevels.Ineligible,
    };

    if (Array.isArray(vehicle)) {
      return !vehicle.length ? inegibilityLines : {};
    }

    return !vehicle ? inegibilityLines : {};
  }
};
