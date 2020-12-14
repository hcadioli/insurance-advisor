const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByIncome', () => {
  it('Should check user income to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByIncome();

    const riskScore = useCase.execute({
      income: 300000
    });

    expect(riskScore).toEqual({
      auto: -1,
      disability: -1,
      home: -1,
      life: -1,
    });
  });

  it('Should check user income to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByIncome();

    const riskScore = useCase.execute({ income: 10000 });

    expect(riskScore).toEqual({});
  });
});
