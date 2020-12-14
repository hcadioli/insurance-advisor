const Ajv = require('ajv');
const InvalidField = require('../../../../domain/shared/error');

function createSchemaValidatorBasedOn(referenceSchema, CustomError = InvalidField) {
  const schemaValidator = new Ajv();
  const validateData = schemaValidator.compile(referenceSchema);

  return {
    validate: (ctx, next) => {
      const isValid = validateData(ctx.request.body);

      if (!isValid) {
        throw new CustomError(
          validateData.errors[0].message,
          String(validateData.errors[0].dataPath).substr(1),
          validateData.errors[0].params.allowedValues,
        );
      }

      return next();
    }
  };
}

module.exports = {
  createSchemaValidatorBasedOn,
};
