const { PersonalInformation: { PersonalInformationSchema } } = require('../../domain/personal-information');
const { createSerializerBasedOn } = require('./serializer');

const PersonalInformation = createSerializerBasedOn(
  PersonalInformationSchema.properties
);

module.exports = PersonalInformation;
