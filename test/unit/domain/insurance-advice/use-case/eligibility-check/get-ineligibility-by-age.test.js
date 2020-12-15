const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetInegibilityByAge', () => {
  it('Should create ineligible lines when age >= 60', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByAge();

    const ineligibleLines = useCase.execute({ age: 65 });

    expect(ineligibleLines).toEqual({
      disability: 'ineligible',
      life: 'ineligible'
    });
  });

  it('Should not create ineligible lines when age < 60', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetInegibilityByAge();

    const ineligibleLines = useCase.execute({ age: 59 });

    expect(ineligibleLines).toEqual({});
  });
});
