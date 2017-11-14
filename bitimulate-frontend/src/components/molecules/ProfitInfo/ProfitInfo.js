import React from 'react';
import styles from './ProfitInfo.scss';
import classNames from 'classnames/bind';

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

const ProfitInfo = () => (
  <div className={cx('profit-info')}>
    <h2>Initial & Current Amount</h2>
    <div className={cx('description')}>
      Profit Percent is calculated by USD.
    </div>
    <div className={cx('info')}>
      <InfoBox
        name="Initial Amount">
        <p>100 BTC</p>
        <p><span className={cx('sign')}>≈</span> 100,000 USD</p>
      </InfoBox>
      <InfoBox
        name="Current Amount">
        <p>100 BTC</p>
        <p><span className={cx('sign')}>≈</span> 100,000 USD</p>
      </InfoBox>
      <InfoBox
        name="Profit Percent">
        <div className={cx('percentage', 'positive')}>
          +15.23%
        </div>
      </InfoBox>
      
    </div>
  </div>
);

export default ProfitInfo;