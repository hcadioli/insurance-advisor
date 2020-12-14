const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetRiskScoreByHouses {
  isRecent(vehicle) {
    const { recent } = InsuranceAdvice
      .VehicleAges;
    const currentYear = new Date().getFullYear();

    const isRecent = (currentYear - vehicle.year) < recent;

    return isRecent;
  }

  execute(personalInformation) {
    const { vehicle } = personalInformation;
    const riskScoreByHouses = {
      auto: InsuranceAdvice.RiskScoreUnits.addUnit,
    };

    if (Array.isArray(vehicle)) {
      return vehicle.find(this.isRecent) ? riskScoreByHouses : {};
    }

    return this.isRecent(vehicle) ? riskScoreByHouses : {};
  }
};
