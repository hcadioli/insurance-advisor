const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByAge', () => {
  it('Should check user age to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByAge();

    const riskScore = useCase.execute({ age: 25 });

    expect(riskScore).toEqual({
      auto: -2,
      disability: -2,
      home: -2,
      life: -2,
    });
  });

  it('Should check user age to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByAge();

    const riskScore = useCase.execute({ age: 35 });

    expect(riskScore).toEqual({
      auto: -1,
      disability: -1,
      home: -1,
      life: -1,
    });
  });

  it('Should check user age to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByAge();

    const riskScore = useCase.execute({ age: 50 });

    expect(riskScore).toEqual({});
  });
});
