const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { errorHandler } = require('../error');

const server = new Koa();
const router = new Router();

server.use(bodyParser());
server.use(errorHandler);

module.exports = {
  server,
  router
};
