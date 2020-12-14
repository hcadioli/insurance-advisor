const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetInegibilityByHouses', () => {
  it('Should create ineligible lines when user has no house', async () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByHouses();

    const ineligibleLines = useCase.execute({});

    expect(ineligibleLines).toEqual({
      home: 'ineligible',
    });
  });

  it('Should not create ineligible lines when user has house', async () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByHouses();

    const ineligibleLines = useCase.execute({ house: {} });

    expect(ineligibleLines).toEqual({});
  });
});
