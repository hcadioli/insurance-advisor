const InsuranceAdvice = require('../../domain/insurance-advice');

const GetIneligibilityByAge = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibilityByAge();
const GetIneligibilityByIncome = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibilityByIncome();
const GetIneligibilityByHouses = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibilityByHouses();
const GetIneligibilityByVehicles = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibilityByVehicles();

const GetIneligibleLinesOfInsurance = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibleLinesOfInsurance(
    {
      GetIneligibilityByIncome,
      GetIneligibilityByVehicles,
      GetIneligibilityByHouses,
      GetIneligibilityByAge,
    }
  );

const GetBaseRiskScore = new InsuranceAdvice.UseCase
  .RiskScore.GetBaseRiskScore();
const GetRiskScoreByIncome = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByIncome();
const GetRiskScoreByVehicles = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByVehicles();
const GetRiskScoreByHouses = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByHouses();
const GetRiskScoreByAge = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByAge();
const GetRiskScoreByDependents = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByDependents();
const GetRiskScoreByMaritalStatus = new InsuranceAdvice.UseCase
  .RiskScore.GetRiskScoreByMaritalStatus();
const ReduceRiskScores = new InsuranceAdvice.UseCase
  .RiskScore.ReduceRiskScores();

const CalculateRiskScore = new InsuranceAdvice.UseCase
  .RiskScore.CalculateRiskScore(
    {
      GetBaseRiskScore,
      GetRiskScoreByIncome,
      GetRiskScoreByVehicles,
      GetRiskScoreByHouses,
      GetRiskScoreByAge,
      GetRiskScoreByDependents,
      GetRiskScoreByMaritalStatus,
      ReduceRiskScores
    }
  );

const ProcessRiskScoreToInsuranceAdvice = new InsuranceAdvice.UseCase
  .ProcessRiskScoreToInsuranceAdvice();

const CreateInsuranceAdvice = new InsuranceAdvice.UseCase
  .CreateInsuranceAdvice({
    GetIneligibleLinesOfInsurance,
    CalculateRiskScore,
    ProcessRiskScoreToInsuranceAdvice
  });

module.exports = {
  CreateInsuranceAdvice,
};
