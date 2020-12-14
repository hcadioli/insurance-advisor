const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByHouses', () => {
  it('Should check user house to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByHouses();

    const riskScore = useCase.execute({
      house: { ownership_status: 'mortgaged' }
    });

    expect(riskScore).toEqual({
      disability: 1,
      home: 1,
    });
  });

  it('Should check user house to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByHouses();

    const riskScore = useCase.execute({ house: {} });

    expect(riskScore).toEqual({});
  });
});
