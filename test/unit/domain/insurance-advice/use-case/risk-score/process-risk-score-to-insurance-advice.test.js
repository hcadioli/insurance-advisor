const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('ProcessRiskScoreToInsuranceAdvice', () => {
  it('Should process risk score to insurance advice', () => {
    const useCase = new InsuranceAdvice.UseCase
      .ProcessRiskScoreToInsuranceAdvice();

    const riskScore = useCase.execute({
      auto: 0,
      disability: 1,
      home: 2,
      life: 3,
    });

    expect(riskScore).toEqual({
      auto: 'economic',
      disability: 'regular',
      home: 'regular',
      life: 'responsible',
    });
  });

  it('Should process risk score to insurance advice', () => {
    const useCase = new InsuranceAdvice.UseCase
      .ProcessRiskScoreToInsuranceAdvice();

    const riskScore = useCase.execute({
      auto: -1,
      disability: 0,
      home: 0,
      life: 5,
    });

    expect(riskScore).toEqual({
      auto: 'economic',
      disability: 'economic',
      home: 'economic',
      life: 'responsible',
    });
  });

  it('Should process risk score to insurance advice', () => {
    const useCase = new InsuranceAdvice.UseCase
      .ProcessRiskScoreToInsuranceAdvice();

    const riskScore = useCase.execute({
      auto: 5,
      disability: 2,
      home: 4,
      life: 6,
    });

    expect(riskScore).toEqual({
      auto: 'responsible',
      disability: 'regular',
      home: 'responsible',
      life: 'responsible',
    });
  });
});
