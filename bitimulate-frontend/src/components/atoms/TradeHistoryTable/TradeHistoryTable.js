import React, { Component } from 'react';
import styles from './TradeHistoryTable.scss';
import classNames from 'classnames/bind';
import {limitDigit} from 'lib/utils';
import moment from 'moment';
import scuize from 'lib/hoc/scuize';
import ReactTooltip from 'react-tooltip';

const cx = classNames.bind(styles);


const Row = ({date, type, rate, amount, personal, processed}) => {
  return (
    <div className={cx('row', 'flicker', { personal })}>
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
      { personal && <div className={cx('col', 'status', {
        processed
      })}>
          Status
        </div>}
    </div>
  )
}

const OptimizedRow = scuize(function (nextProps, nextState) {
  return false;
})(Row);




// // date | type | price | amount
const TradeHistoryTable = ({data, personal}) => {

  const tooltip = personal ? {
    'data-tip': "Double click to cancel",
    'data-effect': 'solid'
  } : {} 

  const rows = data && data.map(
    row => <OptimizedRow id={row.get('tradeID')} key={row.get('tradeID')} {...row.toJS()} personal={personal}/>
  )
  return (
    <div className={cx('trade-history-table')}>
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
        { personal && <div className={cx('col', 'status')}>
          Status
        </div>}
      </div>
      <div className={cx('rows')} {...tooltip}>
        {rows}
      </div>
      <ReactTooltip />
    </div>
  );
};

export default TradeHistoryTable;