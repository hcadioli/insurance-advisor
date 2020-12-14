const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetBaseRiskScore', () => {
  it('Should sum risk questions to determine base score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetBaseRiskScore();

    const riskScore = useCase.execute({ risk_questions: [1, 0, 0] });

    expect(riskScore).toEqual({
      auto: 1,
      disability: 1,
      home: 1,
      life: 1,
    });
  });

  it('Should sum risk questions to determine base score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetBaseRiskScore();

    const riskScore = useCase.execute({ risk_questions: [1, 1, 0] });

    expect(riskScore).toEqual({
      auto: 2,
      disability: 2,
      home: 2,
      life: 2,
    });
  });
});
