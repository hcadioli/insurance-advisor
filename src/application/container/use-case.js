const InsuranceAdvice = require('../../domain/insurance-advice');

const GetInegibilityByAge = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetInegibilityByAge();
const GetInegibilityByIncome = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetInegibilityByIncome();
const GetInegibilityByHouses = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetInegibilityByHouses();
const GetInegibilityByVehicles = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetInegibilityByVehicles();

const GetIneligibleLinesOfInsurance = new InsuranceAdvice.UseCase
  .EligibilityCheck.GetIneligibleLinesOfInsurance(
    {
      GetInegibilityByIncome,
      GetInegibilityByVehicles,
      GetInegibilityByHouses,
      GetInegibilityByAge,
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
