const Container = require('../../container');
const { SchemaValidator } = require('../middleware');

module.exports = function insuranceAdviceRoutes(router) {
  router.post(
    '/insurance-advice',
    SchemaValidator.PersonalInformation.validate,
    (...args) => Container.controller.insuranceAdvice.create(...args),
  );
};
