require('dotenv').config();

const poloniex = require('lib/poloniex');
const db = require('db');
const ExchangeRate = require('db/models/ExchangeRate');
const socket = require('./socket');
const { parseJSON, polyfill } = require('lib/common');
const currencyPairMap = require('lib/poloniex/currencyPairMap');

const initialize = () => {
  db.connect();
  socket.connect();
  importInitialChartData();
};

const messageHandler = {
  1002: async (data) => {
    if (!data) return;
    const converted = poloniex.convertToTickerObject(data);
    const { name } = converted;
    const rest = polyfill.objectWithoutProperties(converted, 'name');
    
    try {
      // const updated = await ExchangeRate.updateTicker(name, rest);
      await ExchangeRate.updateTicker(name, rest);
      // console.log('[Updated]', name, new Date());
    } catch (e) {
      console.error(e);
    }
  }
};

socket.handleMessage = (message) => {
  const parsed = parseJSON(message);
  if (!parsed) {
    return null;
  }
  const [type, meta, data] = parsed;
  if (messageHandler[type]) {
    messageHandler[type](data);
  }
};

// async function registerInitialExchangeRate() {
//   const tickers = await poloniex.getTickers();

//   // removes all the data from the collection (only for temporary use)
//   await ExchangeRate.drop();
//   console.log('dropped exchangerate collection');

//   const keys = Object.keys(tickers);
//   const promises = keys.map(
//     key => {
//       const ticker = tickers[key];
//       const data = Object.assign({name: key}, ticker);
//       const exchangeRate = new ExchangeRate(data);
//       return exchangeRate.save();
//     }
//   );
//   await promises;
//   console.log('succeed!');
// }

async function importInitialChartData() {
  const currencyPairs = [];
  for (let key in currencyPairMap) {
    currencyPairs.push(currencyPairMap[key]);
  }
  const requests = currencyPairs.map((currencyPaire) => () => poloniex.getChartData(currencyPaire));
  for (let i = 0; i < Math.ceil(currencyPairs.length / 10); i++) {
    const promises = requests.slice(i * 10, i * 10 + 10).map(thunk => thunk());
    console.log(`${i * 10} ~ ${i + 10} 🏁`);
    console.log(currencyPairs.slice(i * 10, i * 10 + 10).join(', '));
    try {
      await Promise.all(promises);
    } catch (e) {
      console.log('error!');
    }
    console.log(`${i * 10} ~ ${i * 10 + 10} ✅`);
  }
  // await Promise.all(requests);
  // console.log('completed');
  // for (let i = 0; i < currencyPairs.length; i++) {
  //   const cp = currencyPairs[i];
  //   console.log(`[${i}/${currencyPairs.length}] ${cp} 🏁`);
  //   await poloniex.getChartData(cp);
  //   console.log(`[${i}/${currencyPairs.length}] ${cp} ✅`);
  // }
}

async function updateEntireRate() {
  const tickers = await poloniex.getTickers();
  const keys = Object.keys(tickers);
  const promises = keys.map(
    key => {
      return ExchangeRate.updateTicker(key, tickers[key]);
    }
  );

  try {
    await Promise.all(promises);
  } catch (e) {
    console.error('Oops, failt to update entire rate!');
    return;
  }

  console.log('Updated entire rate.');
}

socket.handleRefresh = () => {
  updateEntireRate();
};

initialize();
// registerInitialExchangeRate();

// updateEntireRate();