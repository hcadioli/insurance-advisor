const insuranceAdviceRoutes = require('./insurance-advice');

function register(router) {
  insuranceAdviceRoutes(router);
}
  
module.exports = {
  register
}