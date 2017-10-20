import React from 'react';
import styles from './PublicTradeHistory.scss';
import classNames from 'classnames/bind';
import {limitDigit} from 'lib/utils';
import moment from 'moment';

const cx = classNames.bind(styles);

const Row = ({date, type, rate, amount}) => {
  return (
    <div className={cx('row')}>
      <div className={cx('col', 'time')}>
        {moment(date).format('HH:mm')}
      </div>
      <div className={cx('col', 'type')}>
        {type === 'sell' ? 'Sell' : 'Buy'}
      </div>
      <div className={cx('col')}>
        {limitDigit(rate)}
      </div>
      <div className={cx('col')}>
        {limitDigit(amount)}
      </div>
    </div>
  )
}
// // date | type | price | amount
const PublicTradeHistory = ({data}) => {
  const rows = data && data.map(
    row => <Row key={row.get('tradeID')} {...row.toJS()}/>
  )
  return (
    <div className={cx('public-trade-history')}>
      <div className={cx('title')}>
        Trade List
      </div>
      <div className={cx('head')}>
        <div className={cx('col', 'time')}>
          Time
        </div>
        <div className={cx('col', 'type')}>
          Type
        </div>
        <div className={cx('col')}>
          Price
        </div>
        <div className={cx('col')}>
          Amount
        </div>
      </div>
      <div className={cx('rows')}>
        {rows}
      </div>

    </div>
  );
};

export default PublicTradeHistory;