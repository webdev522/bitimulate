const currencyInfo = require('lib/poloniex/currencyInfo');

exports.getCurrencyInfo = async (ctx) => {
  // ctx.set('Last-Modified', 'Fri, 13 Oct 2017 14:41:50 GMT');
  // ctx.set('Cache-Control', 'public, max-age=31536000');
  ctx.body = currencyInfo;
};