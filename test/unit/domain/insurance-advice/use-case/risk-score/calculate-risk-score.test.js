const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');
const Mock = require('../../../../../mock');

describe('GetRiskScore', () => {
  it('Should create ineligible lines', async () => {
    const riskScoresCollection = {
      baseRiskScore: {
        auto: 1,
        disability: 1,
        home: 1,
        life: 1,
      },

      riskScoreByIncome: {
        auto: -1,
        disability: -1,
        home: -1,
        life: -1,
      },

      riskScoreByDependents: {
        disability: 1,
        life: 1,
      },

      riskScoreByMaritalStatus: {
        disability: -1,
        life: 1,
      },

      riskScoreByVehicles: { auto: 1 },

      riskScoreByHouses: {
        disability: 1,
        home: 1,
      },
      riskScoreByAge: {
        auto: -2,
        disability: -2,
        home: -2,
        life: -2,
      },
    };

    const GetBaseRiskScore = Mock
      .executeReturnValue(riskScoresCollection.baseRiskScore);

    const GetRiskScoreByIncome = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByIncome);
    const GetRiskScoreByVehicles = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByVehicles);
    const GetRiskScoreByHouses = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByHouses);
    const GetRiskScoreByAge = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByAge);
    const GetRiskScoreByDependents = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByDependents);
    const GetRiskScoreByMaritalStatus = Mock
      .executeReturnValue(riskScoresCollection.riskScoreByMaritalStatus);

    const expectedResult = {
      auto: -1,
      disability: -1,
      home: -1,
      life: 0
    };

    const ReduceRiskScores = Mock
      .executeReturnValue(expectedResult);

    const container = {
      GetBaseRiskScore,
      GetRiskScoreByIncome,
      GetRiskScoreByVehicles,
      GetRiskScoreByHouses,
      GetRiskScoreByAge,
      GetRiskScoreByDependents,
      GetRiskScoreByMaritalStatus,
      ReduceRiskScores,
    };

    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .CalculateRiskScore(container);

    const riskScore = useCase.execute(Mock.personalInformation);

    expect(GetBaseRiskScore.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);

    expect(GetRiskScoreByIncome.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetRiskScoreByVehicles.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetRiskScoreByHouses.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetRiskScoreByAge.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetRiskScoreByDependents.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetRiskScoreByMaritalStatus.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);

    expect(ReduceRiskScores.execute)
      .toHaveBeenCalledWith(riskScoresCollection);

    expect(riskScore).toEqual(expectedResult);
  });
});
