const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByMaritalStatus', () => {
  it('Should check user marital status to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByMaritalStatus();

    const riskScore = useCase.execute({
      marital_status: 'married'
    });

    expect(riskScore).toEqual({
      disability: -1,
      life: 1,
    });
  });

  it('Should check user marital status to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByMaritalStatus();

    const riskScore = useCase.execute({ marital_status: 'single' });

    expect(riskScore).toEqual({});
  });
});
