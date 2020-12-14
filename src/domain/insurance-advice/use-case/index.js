const CreateInsuranceAdvice = require('./create-insurance-advice');
const EligibilityCheck = require('./eligibility-check');
const RiskScore = require('./risk-score');
const ProcessRiskScoreToInsuranceAdvice = require('./process-risk-score-to-insurance-advice');

module.exports = {
  CreateInsuranceAdvice,
  EligibilityCheck,
  RiskScore,
  ProcessRiskScoreToInsuranceAdvice,
};
