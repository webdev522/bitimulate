import React from 'react';
import styles from './ProfitInfo.scss';
import classNames from 'classnames/bind';
import { limitDigit } from 'lib/utils';

const cx = classNames.bind(styles);

const InfoBox = ({name, children}) => (
  <div className={cx('info-box')}>
    <h4>
      {name}
    </h4>
    <div className={cx('content')}>
      { children }
    </div>
  </div>
)

const ProfitInfo = ({initial, current}) => {
  const { currency, value, usdRate } = initial.toJS();

  const initialUSD = currency === 'USD' ? value : value / usdRate;
  const diff = current.usd - initialUSD;
  const earnings = (diff / initialUSD * 100).toFixed(2);


  return (
    <div className={cx('profit-info')}>
      <h2>Initial & Current Amount</h2>
      <div className={cx('description')}>
        Profit Percent is being calculated by USD.
      </div>
      <div className={cx('info')}>
        <InfoBox
          name="Initial Amount">
          {
            (() => {
              if(currency === 'USD') {
                return (
                  <div>
                    <p>$ {value}</p>
                    <p><span className={cx('sign')}>≈</span> Ƀ{limitDigit(value * usdRate)}</p>
                  </div>
                )
              }

              return (
                <div>
                  <p>Ƀ {value}</p>
                  <p><span className={cx('sign')}>≈</span> ${limitDigit(value / usdRate, 10, true, true)}</p>
                </div>
              )
            })()
          }
        </InfoBox>
        <InfoBox
          name="Current Amount">
          <p>Ƀ {limitDigit(current.btc, 10)}</p>
          <p><span className={cx('sign')}>≈</span> ${limitDigit(current.usd, 10, true, true)}</p>
        </InfoBox>
        <InfoBox
          name="Profit Percent">
          <div className={cx('percentage', diff >= 0 ? 'positive' : 'negative')}>
            {diff > 0 && '+'}{earnings}%
          </div>
        </InfoBox>
        
      </div>
    </div>
  );
}

export default ProfitInfo;