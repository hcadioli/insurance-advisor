const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetRiskScoreByVehicles', () => {
  const RealDate = Date;

  beforeEach(() => {
    global.Date.now = jest.fn(() => new Date('2019-12-01T10:00:00Z').getTime());
  });

  afterEach(() => {
    global.Date = RealDate;
  });

  it('Should check user vehicles to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByVehicles();

    const riskScore = useCase.execute({
      vehicle: { year: 2018 }
    });

    expect(riskScore).toEqual({
      auto: 1,
    });
  });

  it('Should check user vehicles to determine score', () => {
    const useCase = new InsuranceAdvice.UseCase.RiskScore
      .GetRiskScoreByVehicles();

    const riskScore = useCase.execute({
      vehicle: { year: 2000 }
    });

    expect(riskScore).toEqual({});
  });
});
