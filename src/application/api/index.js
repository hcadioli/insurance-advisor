const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { errorHandler } = require('./error');
const Config = require('./config');
const { logger } = require('./logger');
const api = require('./server');

const server = new Koa();
const router = new Router();

server.use(bodyParser());
server.use(errorHandler);

api(server, router)
  .start(Config.server.port, () => {
    logger.info(
      null,
      `Application is running on port ${Config.server.port}`,
      {
        name: Config.server.name,
        version: Config.server.version,
      },
    );
  });
