import React, { Component } from 'react';
import styles from './TradeHistoryTable.scss';
import classNames from 'classnames/bind';
import {limitDigit} from 'lib/utils';
import moment from 'moment';
import scuize from 'lib/hoc/scuize';
import ReactTooltip from 'react-tooltip';
import { Spinner } from 'components';

const cx = classNames.bind(styles);

const statusMap = {
  'processed': 'Done',
  'waiting': 'Waiting',
  'cancelled': 'Cancelled'
}

const Row = ({date, type, rate, amount, personal, status, onCancelOrder, id}) => {
  const d = new Date(date);
  const calculatedGMT = new Date(d.valueOf() - d.getTimezoneOffset() * 60000)
  return (
    <div className={cx('row', 'flicker', { personal })} onDoubleClick={
      () => {
        if(!onCancelOrder) return;
        if(status !== 'waiting') return;
        onCancelOrder(id);
      }
    }>
      <div className={cx('col', 'time')}>
        {moment(personal ? date : calculatedGMT).format('HH:mm')}
      </div>
      <div className={cx('col', 'type', type)}>
        {type === 'sell' ? 'Sell' : 'Buy'}
      </div>
      <div className={cx('col')}>
        {limitDigit(rate)}
      </div>
      <div className={cx('col')}>
        {limitDigit(amount)}
      </div>
      { personal && <div className={cx('col', 'status', status)}>
          {statusMap[status]}
        </div>}
    </div>
  )
}

const OptimizedRow = scuize(function (nextProps, nextState) {
  return this.props.status !== nextProps.status;
})(Row);




// // date | type | price | amount
const TradeHistoryTable = ({data, personal, onCancelOrder, onScroll, hasNext}) => {

  const tooltip = personal ? {
    'data-tip': "Double click to cancel your order",
    'data-effect': 'solid'
  } : {} 

  const rows = data && data.map(
    row => {
      if(!personal) {
        return <OptimizedRow id={row.get('tradeID')} key={row.get('tradeID')} {...row.toJS()}/>;
      } else {
        const { 
          _id, price, amount, status, sell
        } = row.toJS();
        return <OptimizedRow personal key={_id} id={_id} rate={price} amount={amount} type={sell ? 'sell' : 'buy'} status={status} onCancelOrder={onCancelOrder}/>
      }
    }
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
      <div className={cx('rows')} {...tooltip} onScroll={onScroll}>
        {rows}
        { hasNext && (
          <div className={cx('scroll-block')}>
            <Spinner size="5rem"/>
          </div>
        )}
      </div>
      <ReactTooltip />
    </div>
  );
};

export default TradeHistoryTable;