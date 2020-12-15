const routes = require('../routes');

module.exports = (server, router) => {
  routes.register(router);
  server.use(router.routes());

  return server;
};
