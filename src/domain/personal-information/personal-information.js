const HouseOwnerShipStatuses = Object.freeze({
  Owned: 'owned',
  Mortgaged: 'mortgaged',
});

const MaritalStatuses = Object.freeze({
  Single: 'single',
  Married: 'married',
});

const UserPersonalInformationSchema = Object.freeze({
  title: 'User Personal Information',
  properties: {
    age: {
      type: 'integer',
      minimum: 0,
    },
    dependents: {
      type: 'integer',
      minimum: 0,
    },
    house: {
      type: 'object',
      properties: {
        ownership_status: {
          type: 'string',
          enum: Object.values(HouseOwnerShipStatuses),
        }
      }
    },
    income: {
      type: 'integer',
      minimum: 0,
    },
    marital_status: {
      type: 'string',
      enum: Object.values(MaritalStatuses),
    },
    risk_questions: {
      type: 'array',
      maxItems: 3,
      minItems: 3,
      items: [
        { type: 'boolean' },
        { type: 'boolean' },
        { type: 'boolean' }
      ]
    },
    vehicle: {
      type: 'object',
      properties: {
        ownership_status: {
          type: 'integer'
        }
      }
    },
  },
  required: ['age', 'dependents', 'income', 'marital_status', 'risk_questions']
});

module.exports = {
  UserPersonalInformationSchema,
  HouseOwnerShipStatuses,
  MaritalStatuses
};