const routes = require('../routes');

module.exports = (server, router) => {
  routes.register(router);
  server.use(router.routes());

  return {
    start: async (port, callback) => {
      return server.listen(port, callback);
    },
  };
};