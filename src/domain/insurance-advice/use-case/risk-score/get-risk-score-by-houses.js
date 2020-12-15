const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetRiskScoreByHouses {
  isMortgaged(house) {
    const { mortgaged } = InsuranceAdvice
      .HouseOwnerShipStatuses;
    const houseOwnerShipStatus = house && house.ownership_status;

    return houseOwnerShipStatus === mortgaged;
  }

  execute(personalInformation) {
    const { house } = personalInformation;
    const riskScoreByHouses = {
      disability: InsuranceAdvice.RiskScoreUnits.addUnit,
      home: InsuranceAdvice.RiskScoreUnits.addUnit,
    };

    if (Array.isArray(house)) {
      return house.find(this.isMortgaged) ? riskScoreByHouses : {};
    }

    return this.isMortgaged(house) ? riskScoreByHouses : {};
  }
};
