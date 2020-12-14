module.exports = class GetIneligibleLinesOfInsurance {
  constructor({
    GetInegibilityByIncome,
    GetInegibilityByVehicles,
    GetInegibilityByHouses,
    GetInegibilityByAge,
  }) {
    this.GetInegibilityByIncome = GetInegibilityByIncome;
    this.GetInegibilityByVehicles = GetInegibilityByVehicles;
    this.GetInegibilityByHouses = GetInegibilityByHouses;
    this.GetInegibilityByAge = GetInegibilityByAge;
  }

  execute(personalInformation) {
    const ineligibilityByIncome = this
      .GetInegibilityByIncome.execute(personalInformation);
    const inegibilityByVehicles = this
      .GetInegibilityByVehicles.execute(personalInformation);
    const inegibilityByHouses = this
      .GetInegibilityByHouses.execute(personalInformation);
    const inegibilityByAge = this
      .GetInegibilityByAge.execute(personalInformation);

    const inegibilityLines = {
      ...ineligibilityByIncome,
      ...inegibilityByVehicles,
      ...inegibilityByHouses,
      ...inegibilityByAge
    };

    return inegibilityLines;
  }
};
