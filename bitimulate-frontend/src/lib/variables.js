export const optionsPerCurrency = {
  // 'KRW': {
  //   symbol: '₩',
  //   initialValue: 1000000
  // },
  'USD': {
    symbol: '$',
    initialValue: 1000
  },
  'BTC': {
    symbol: 'Ƀ',
    initialValue: 1
  }
};

export const initialCurrencies = [
  // {
  //   name: 'KRW',
  //   symbol: '₩'
  // },
  {
    name: 'USD',
    symbol: '$'
  },
  {
    name: 'BTC',
    symbol: 'Ƀ'
  }
];

export const chartTypes = [
  {
    name: 'day',
    text: '1d',
    unit: '5-min'
  },
  {
    name: 'week',
    text: '1w',
    unit: '30-min'
  },
  {
    name: 'month',
    text: '1m',
    unit: '2-hr'
  },
  {
    name: 'year',
    text: '1y',
    unit: '1-day'
  },
  {
    name: 'all',
    text: 'All',
    unit: '1-day'
  }
];