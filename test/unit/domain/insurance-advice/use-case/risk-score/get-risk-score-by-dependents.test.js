const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByDependents', () => {
  it('Should check user dependents to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByDependents();

    const riskScore = useCase.execute({ dependents: 1 });

    expect(riskScore).toEqual({
      disability: 1,
      life: 1,
    });
  });

  it('Should check user dependents to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByDependents();

    const riskScore = useCase.execute({ dependents: 0 });

    expect(riskScore).toEqual({});
  });
});
