import React from 'react';
import styles from './TradeSection.scss';
import classNames from 'classnames/bind';
import { TradeBox } from 'components';


const cx = classNames.bind(styles);

const TradeSection = () => {
  return (
    <div className={cx('trade-section')}>
      <TradeBox title="Buy BTC"/>
      <TradeBox title="Sell BTC"/>      
    </div>
  );
};

export default TradeSection;