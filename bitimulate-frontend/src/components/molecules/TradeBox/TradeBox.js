import React from 'react';
import styles from './TradeBox.scss';
import classNames from 'classnames/bind';
import { Card, HorizontalLabelInput } from 'components';


const cx = classNames.bind(styles);

const TradeBox = ({title, hasAmount, base, currencyType, price, amount, sell}) => {
  return (
    <Card className={cx('trade-box')}>
      <div className={cx('head')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('has-amount')}><span className={cx('desc')}>Amount:</span> {hasAmount} <span className={cx('currency')}>{ sell ? currencyType : base }</span></div>
      </div>
      <div className={cx('content')}>
        <HorizontalLabelInput label="Price" currency="BTC"/>
        <HorizontalLabelInput label={sell ? 'Sell Amount' : 'Buy Amount'} currency="ETH"/>
      </div>
      <div className={cx('content', 'bottom')}>
        <div className={cx('text')}>Total {sell?'Sell':'Buy'} Price</div>
        <div className={cx('total')}>100 <span className={cx('base')}>{base}</span></div>
      </div>
    </Card>
  );
};

TradeBox.defaultProps = {
  title: 'Title',
  hasAmount: 100,
  base: 'BTC',
  currencyType: 'ETH',
  price: 100,
  amount: 100,
  sell: true
}

export default TradeBox;