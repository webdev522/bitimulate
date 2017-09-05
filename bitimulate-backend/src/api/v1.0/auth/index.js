const Router = require('koa-router');

const auth = new Router();

auth.get('/', (ctx) => {
  ctx.body = 'routing setting is done!';
});

module.exports = auth;