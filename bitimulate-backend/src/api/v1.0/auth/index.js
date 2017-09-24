const Router = require('koa-router');

const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.get('/', (ctx) => {
  ctx.body = 'routing setting is done!';
});

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/check', authCtrl.check);

module.exports = auth;