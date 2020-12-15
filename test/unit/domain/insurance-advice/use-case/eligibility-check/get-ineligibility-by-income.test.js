const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');

describe('GetIneligibleLinesOfInsurance', () => {
  it('Should create ineligible lines', () => {
    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetIneligibilityByIncome();

    const ineligibleLines = useCase.execute({ income: 0 });

    expect(ineligibleLines).toEqual({
      disability: 'ineligible',
    });
  });
});
