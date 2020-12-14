const InsuranceLevels = Object.freeze({
  Ineligible: 'ineligible',
  Economic: 'economic',
  Responsible: 'responsible',
  Regular: 'regular',
});

const StartRiskScore = Object.freeze({
  auto: 0,
  disability: 0,
  home: 0,
  life: 0,
});

const RiskScoreUnits = Object.freeze({
  addUnit: 1,
  deductUnit: -1,
  addTwoUnits: 2,
  deductTwoUnits: -2,
});

const UserAges = Object.freeze({
  thirty: 30,
  forty: 40,
  sixty: 60
});

const RiskScoreRanges = Object.freeze({
  economicRange: {
    end: 0
  },
  regularRange: {
    start: 1,
    end: 2
  },
  responsibleRange: {
    start: 3
  }
});

const VehicleAges = Object.freeze({
  recent: 5,
});

const MaritalStatuses = Object.freeze({
  married: 'married',
  single: 'single',
});

const IncomeLevels = Object.freeze({
  high: 200000,
});

const HouseOwnerShipStatuses = Object.freeze({
  owned: 'owned',
  mortgaged: 'mortgaged',
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
  InsuranceAdviceSchema,
  StartRiskScore,
  UserAges,
  RiskScoreUnits,
  MaritalStatuses,
  IncomeLevels,
  HouseOwnerShipStatuses,
  VehicleAges,
  RiskScoreRanges
};
