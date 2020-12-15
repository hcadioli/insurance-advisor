const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');
const Mock = require('../../../../../mock');

describe('GetIneligibleLinesOfInsurance', () => {
  it('Should create ineligible lines', () => {
    const ineligibilityByIncome = { disability: 'ineligible' };
    const ineligibilityByVehicles = { auto: 'ineligible' };
    const ineligibilityByHouses = { home: 'ineligible' };
    const ineligibilityByAge = {
      disability: 'ineligible',
      life: 'ineligible'
    };

    const GetIneligibilityByIncome = Mock
      .executeReturnValue(ineligibilityByIncome);
    const GetIneligibilityByVehicles = Mock
      .executeReturnValue(ineligibilityByVehicles);
    const GetIneligibilityByHouses = Mock
      .executeReturnValue(ineligibilityByHouses);
    const GetIneligibilityByAge = Mock
      .executeReturnValue(ineligibilityByAge);

    const container = {
      GetIneligibilityByIncome,
      GetIneligibilityByVehicles,
      GetIneligibilityByHouses,
      GetIneligibilityByAge,
    };

    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetIneligibleLinesOfInsurance(container);

    const ineligibleLines = useCase.execute(Mock.personalInformation);

    expect(GetIneligibilityByIncome.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetIneligibilityByVehicles.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetIneligibilityByHouses.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetIneligibilityByAge.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);

    expect(ineligibleLines).toEqual({
      auto: 'ineligible',
      disability: 'ineligible',
      home: 'ineligible',
      life: 'ineligible',
    });
  });
});
