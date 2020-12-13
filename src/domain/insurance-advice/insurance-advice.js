const InsuranceLevels = Object.freeze({
  Ineligible: 'ineligible',
  Economic: 'economic',
  Responsible: 'responsible',
  Regular: 'regular',
});

const InsuranceAdviceSchema = Object.freeze({
  title: 'Insurance Advice Based on User Personal Information',
  properties: {
    auto: {
      type: 'string',
      enum: Object.values(InsuranceLevels),
    },
    disability: {
      type: 'string',
      enum: Object.values(InsuranceLevels),
    },
    home: {
      type: 'string',
      enum: Object.values(InsuranceLevels),
    },
    life: {
      type: 'string',
      enum: Object.values(InsuranceLevels),
    },
  },
});

module.exports = {
  InsuranceLevels,
  InsuranceAdviceSchema
};
