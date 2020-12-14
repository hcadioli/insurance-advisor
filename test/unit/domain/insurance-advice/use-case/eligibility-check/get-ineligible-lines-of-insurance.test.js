const InsuranceAdvice = require('../../../../../../src/domain/insurance-advice');
const Mock = require('../../../../../mock');

describe('GetIneligibleLinesOfInsurance', () => {
  it('Should create ineligible lines', () => {
    const ineligibilityByIncome = { disability: 'ineligible' };
    const inegibilityByVehicles = { auto: 'ineligible' };
    const inegibilityByHouses = { home: 'ineligible' };
    const inegibilityByAge = {
      disability: 'ineligible',
      life: 'ineligible'
    };

    const GetInegibilityByIncome = Mock
      .executeReturnValue(ineligibilityByIncome);
    const GetInegibilityByVehicles = Mock
      .executeReturnValue(inegibilityByVehicles);
    const GetInegibilityByHouses = Mock
      .executeReturnValue(inegibilityByHouses);
    const GetInegibilityByAge = Mock
      .executeReturnValue(inegibilityByAge);

    const container = {
      GetInegibilityByIncome,
      GetInegibilityByVehicles,
      GetInegibilityByHouses,
      GetInegibilityByAge,
    };

    const useCase = new InsuranceAdvice.UseCase.EligibilityCheck
      .GetIneligibleLinesOfInsurance(container);

    const ineligibleLines = useCase.execute(Mock.personalInformation);

    expect(GetInegibilityByIncome.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetInegibilityByVehicles.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetInegibilityByHouses.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(GetInegibilityByAge.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);

    expect(ineligibleLines).toEqual({
      auto: 'ineligible',
      disability: 'ineligible',
      home: 'ineligible',
      life: 'ineligible',
    });
  });
});
