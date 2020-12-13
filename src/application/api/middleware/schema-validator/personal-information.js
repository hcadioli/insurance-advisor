const PersonalInformationDomain = require('../../../../domain/personal-information');
const { createSchemaValidatorBasedOn } = require('./schema-validator');

const PersonalInformation = createSchemaValidatorBasedOn(
  PersonalInformationDomain.PersonalInformation.PersonalInformationSchema,
  PersonalInformationDomain.Error.InvalidPersonalInformation
);

module.exports = PersonalInformation;
