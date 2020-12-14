module.exports = class CalculateRiskScore {
  constructor({
    GetBaseRiskScore,
    GetRiskScoreByIncome,
    GetRiskScoreByVehicles,
    GetRiskScoreByHouses,
    GetRiskScoreByAge,
    GetRiskScoreByDependents,
    GetRiskScoreByMaritalStatus,
    ReduceRiskScores,
  }) {
    this.GetBaseRiskScore = GetBaseRiskScore;
    this.GetRiskScoreByIncome = GetRiskScoreByIncome;
    this.GetRiskScoreByVehicles = GetRiskScoreByVehicles;
    this.GetRiskScoreByHouses = GetRiskScoreByHouses;
    this.GetRiskScoreByAge = GetRiskScoreByAge;
    this.GetRiskScoreByDependents = GetRiskScoreByDependents;
    this.GetRiskScoreByMaritalStatus = GetRiskScoreByMaritalStatus;
    this.ReduceRiskScores = ReduceRiskScores;
  }

  execute(personalInformation) {
    const riskScoreCollection = {
      baseRiskScore: this.GetBaseRiskScore
        .execute(personalInformation),

      riskScoreByIncome: this.GetRiskScoreByIncome
        .execute(personalInformation),

      riskScoreByVehicles: this.GetRiskScoreByVehicles
        .execute(personalInformation),

      riskScoreByHouses: this.GetRiskScoreByHouses
        .execute(personalInformation),

      riskScoreByAge: this.GetRiskScoreByAge
        .execute(personalInformation),

      riskScoreByDependents: this.GetRiskScoreByDependents
        .execute(personalInformation),

      riskScoreByMaritalStatus: this.GetRiskScoreByMaritalStatus
        .execute(personalInformation),
    };

    const reducedRiskScores = this.ReduceRiskScores
      .execute(riskScoreCollection);

    return reducedRiskScores;
  }
};
