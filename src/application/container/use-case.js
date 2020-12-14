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

const CreateInsuranceAdvice = new InsuranceAdvice.UseCase
  .CreateInsuranceAdvice({
    GetIneligibleLinesOfInsurance
  });

module.exports = {
  CreateInsuranceAdvice,
};
