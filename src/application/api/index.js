const Config = require('./config');
const { logger } = require('./logger');
const { server, router, api } = require('./server');

api(server, router)
  .listen(Config.server.port, () => {
    logger.info(
      null,
      `Application is running on port ${Config.server.port}`,
      {
        name: Config.server.name,
        version: Config.server.version,
      },
    );
  });
