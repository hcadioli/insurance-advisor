const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetInegibilityByVehicles', () => {
  it('Should create ineligible lines when user has no vehicle', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByVehicles();

    const ineligibleLines = useCase.execute({});

    expect(ineligibleLines).toEqual({
      auto: 'ineligible',
    });
  });

  it('Should not create ineligible lines when user has any vehicle', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByVehicles();

    const ineligibleLines = useCase.execute({ vehicle: {} });

    expect(ineligibleLines).toEqual({});
  });
});
