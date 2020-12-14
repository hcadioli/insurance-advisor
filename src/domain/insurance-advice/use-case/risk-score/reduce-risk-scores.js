const { StartRiskScore } = require('../../insurance-advice');

module.exports = class ReduceRiskScore {
  execute(riskScoresCollection) {
    const riskScore = Object.values(riskScoresCollection)
      .reduce((totalScore, currentScore) => {
        const scoreProperties = Object.keys(currentScore);
        const processedScore = {};

        scoreProperties
          .forEach((property) => {
            processedScore[property] =
              currentScore[property] + totalScore[property];
          });

        return {
          ...totalScore,
          ...processedScore
        };
      }, StartRiskScore);

    return riskScore;
  }
};
