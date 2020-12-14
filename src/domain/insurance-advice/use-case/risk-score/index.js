const CalculateRiskScore = require('./calculate-risk-score');
const ReduceRiskScores = require('./reduce-risk-scores');
const GetBaseRiskScore = require('./get-base-risk-score');
const GetRiskScoreByIncome = require('./get-risk-score-by-income');
const GetRiskScoreByVehicles = require('./get-risk-score-by-vehicles');
const GetRiskScoreByHouses = require('./get-risk-score-by-houses');
const GetRiskScoreByAge = require('./get-risk-score-by-age');
const GetRiskScoreByDependents = require('./get-risk-score-by-dependents');
const GetRiskScoreByMaritalStatus = require('./get-risk-score-by-marital-status');

module.exports = {
  CalculateRiskScore,
  ReduceRiskScores,
  GetBaseRiskScore,
  GetRiskScoreByIncome,
  GetRiskScoreByVehicles,
  GetRiskScoreByHouses,
  GetRiskScoreByAge,
  GetRiskScoreByDependents,
  GetRiskScoreByMaritalStatus,
};
