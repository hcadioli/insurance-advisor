const executeReturnValue = (value) => ({
  execute: jest.fn().mockReturnValue(value),
});

const personalInformation = {
  age: 35,
  dependents: 2,
  house: { ownership_status: 'owned' },
  income: 0,
  marital_status: 'married',
  risk_questions: [0, 1, 0],
  vehicle: { year: 2018 },
};

module.exports = {
  executeReturnValue,
  personalInformation
};
