import store from 'store';

export function getCurrency(key) {
  const temp = key.indexOf('_') !== -1 ? key.split('_')[1] : key;

  const currencyInfo = store.getState().common.get('currencyInfo');
  const currency = currencyInfo.find(c => c.get('key') === temp);
  return currency;
}

export function scrollTo(elementY, duration=1000) { 

  if (!window.requestAnimationFrame || duration === 0) {
      return window.scrollTo(0, elementY);
  }
}

export function waitUntil(fn, timeout) {
  return new Promise((resolve, reject) => {
    if (timeout) {
      setTimeout(() => {
        reject();
      }, timeout);
    }

    const check = () => {
      if (fn()) {
        resolve();
        return;
      }
      setTimeout(check, 0);
    };

    check();
  })
}