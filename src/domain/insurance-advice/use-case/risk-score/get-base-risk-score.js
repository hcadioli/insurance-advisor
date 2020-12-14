const InsuranceAdvice = require('../../insurance-advice');

module.exports = class GetBaseRiskScore {
  static sumRiskQuestions(riskQuestions) {
    const sumQuestions = (total, question) => total + question;

    return riskQuestions
      .reduce(sumQuestions, 0);
  }

  execute(personalInformation) {
    const { risk_questions: riskQuestions } = personalInformation;
    const startScore = InsuranceAdvice.StartRiskScore;
    const riskScore = {};

    const riskPointsFromQuestion = GetBaseRiskScore
      .sumRiskQuestions(riskQuestions);

    Object.keys(startScore).forEach((line) => {
      riskScore[line] = riskPointsFromQuestion;
    });

    return riskScore;
  }
};
