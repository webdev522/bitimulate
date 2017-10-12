require('dotenv').config();

// loadenvironment variables
const {
  PORT: port
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const db = require('./db');

const api = require('./api');
const jwtMiddleware = require('lib/middlewares/jwt');

const cache = require('lib/cache');

async function test() {
  await cache.set('hello', 'world');
  const value = await cache.get('hello');
  console.log(value);
}

test();

db.connect();
const app = new Koa();
app.use(jwtMiddleware);
app.use(bodyParser());

const router = new Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());
// app.use(ctx => {
//   ctx.body = 'helllo bitimulate';
// });

app.listen(port, () => {
  console.log(`bitimulate server is listening to port ${port}`);
});
