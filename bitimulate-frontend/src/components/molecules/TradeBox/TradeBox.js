import React from 'react';
import styles from './TradeBox.scss';
import classNames from 'classnames/bind';
import { Card, HorizontalLabelInput, Button } from 'components';
import { limitDigit } from 'lib/utils';

const cx = classNames.bind(styles);

const TradeBox = ({title, hasAmount, currencyType, price, amount, sell}) => {
  const actionText = sell ? 'Sell' : 'Buy';
  const secondaryCurrency = currencyType === 'BTC' ? 'USD' : 'BTC';
  
  const inputSetting = {
    type: 'number',
    min: '0',
    inputMode: 'numeric',
    pattern: '[0-9]*',
  };

  return (
    <Card className={cx('trade-box')}>
      <div className={cx('head')}>
        <div className={cx('title')}>{currencyType} {actionText}</div>
        <div className={cx('has-amount')}><span className={cx('desc')}>Amount:</span> {limitDigit(hasAmount, 8)} <span className={cx('currency')}>{ sell ? currencyType : secondaryCurrency }</span></div>
      </div>
      <div className={cx('content')}>
        <HorizontalLabelInput {...inputSetting} label="Price" currency={secondaryCurrency} value={price}/>
        <HorizontalLabelInput {...inputSetting} label={actionText + 'Amount'} currency={currencyType} value={amount}/>
      </div>
      <div className={cx('content', 'bottom')}>
        <div className={cx('text')}>Total {actionText} Price</div>
        <div className={cx('total')}>100 <span className={cx('base')}>{secondaryCurrency}</span></div>
      </div>
      <div className={cx('content', 'bright', 'bottom')}>
        <Button flat color="teal" flex>{actionText}</Button>
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
  amount: 100
}

export default TradeBox;