const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetIneligibilityByHouses', () => {
  it('Should create ineligible lines when user has no house', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetIneligibilityByHouses();

    const ineligibleLines = useCase.execute({});

    expect(ineligibleLines).toEqual({
      home: 'ineligible',
    });
  });

  it('Should not create ineligible lines when user has house', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetIneligibilityByHouses();

    const ineligibleLines = useCase.execute({ house: {} });

    expect(ineligibleLines).toEqual({});
  });
});
