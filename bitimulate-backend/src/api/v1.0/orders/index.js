const Router = require('koa-router');

const orders = new Router();
const ordersCtrl = require('./orders.ctrl');

orders.post('/', ordersCtrl.createOrder);

module.exports = orders;