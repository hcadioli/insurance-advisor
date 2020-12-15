module.exports = class GetIneligibleLinesOfInsurance {
  constructor({
    GetIneligibilityByIncome,
    GetIneligibilityByVehicles,
    GetIneligibilityByHouses,
    GetIneligibilityByAge,
  }) {
    this.GetIneligibilityByIncome = GetIneligibilityByIncome;
    this.GetIneligibilityByVehicles = GetIneligibilityByVehicles;
    this.GetIneligibilityByHouses = GetIneligibilityByHouses;
    this.GetIneligibilityByAge = GetIneligibilityByAge;
  }

  execute(personalInformation) {
    const ineligibilityByIncome = this
      .GetIneligibilityByIncome.execute(personalInformation);
    const ineligibilityByVehicles = this
      .GetIneligibilityByVehicles.execute(personalInformation);
    const ineligibilityByHouses = this
      .GetIneligibilityByHouses.execute(personalInformation);
    const ineligibilityByAge = this
      .GetIneligibilityByAge.execute(personalInformation);

    const ineligibilityLines = {
      ...ineligibilityByIncome,
      ...ineligibilityByVehicles,
      ...ineligibilityByHouses,
      ...ineligibilityByAge
    };

    return ineligibilityLines;
  }
};
