const Container = require('../../container');

module.exports = function insuranceAdviceRoutes(router) {
  router.post(
    '/insurance-advice',
    (args) => Container.controller.insuranceAdvice.create(args),
  );
}