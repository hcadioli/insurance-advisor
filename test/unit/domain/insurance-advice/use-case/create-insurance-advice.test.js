const InsuranceAdvice = require('../../../../../src/domain/insurance-advice');
const Mock = require('../../../../mock');

describe('CreateInsuranceAdvice', () => {
  it('Should correctly replace eligible lines with ineligible', () => {
    const riskScores = {
      auto: 0,
      disability: 0,
      home: 0,
      life: 0,
    };

    const processedRiskScores = {
      auto: 'regular',
      disability: 'economic',
      home: 'economic',
      life: 'regular',
    };

    const ineligibleLines = {
      auto: 'ineligible',
      disability: 'ineligible',
    };

    const CalculateRiskScore = Mock.executeReturnValue(riskScores);

    const ProcessRiskScoreToInsuranceAdvice = Mock
      .executeReturnValue(processedRiskScores);

    const GetIneligibleLinesOfInsurance = Mock
      .executeReturnValue(ineligibleLines);

    const container = {
      CalculateRiskScore,
      ProcessRiskScoreToInsuranceAdvice,
      GetIneligibleLinesOfInsurance,
    };

    const useCase = new InsuranceAdvice.UseCase
      .CreateInsuranceAdvice(container);

    const insuranceAdvice = useCase.execute(Mock.personalInformation);

    expect(CalculateRiskScore.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);
    expect(ProcessRiskScoreToInsuranceAdvice.execute)
      .toHaveBeenCalledWith(riskScores);
    expect(GetIneligibleLinesOfInsurance.execute)
      .toHaveBeenCalledWith(Mock.personalInformation);

    expect(insuranceAdvice).toEqual({
      auto: 'ineligible',
      disability: 'ineligible',
      home: 'economic',
      life: 'regular',
    });
  });
});
