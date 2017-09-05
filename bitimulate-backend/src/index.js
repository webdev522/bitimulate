require('dotenv').config();

// loadenvironment variables
const {
  PORT: port
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');
const db = require('./db');

db.connect();
const app = new Koa();

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
