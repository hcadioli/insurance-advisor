const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScore', () => {
  it('Should reduce risk score collection to final score', () => {
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

    const expectedResult = {
      auto: -1,
      disability: -1,
      home: -1,
      life: 0
    };

    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .ReduceRiskScores();

    const riskScore = useCase.execute(riskScoresCollection);

    expect(riskScore).toEqual(expectedResult);
  });
});
