import React from 'react';
import styles from './OrderBook.scss';
import classNames from 'classnames/bind';
import { Card } from 'components';

const cx = classNames.bind(styles);

const OrderBook = () => {
  return (
    <div className={cx('order-book')}>
      <div className={cx('column')}>
        <Card className={cx('gray-card')}>
          <div className={cx('column-name')}>Buy Order</div>
        </Card>
      </div>
      <div className={cx('column')}>
        <Card className={cx('gray-card')}>
          <div className={cx('column-name')}>Sell Order</div>
        </Card>
      </div>
    </div>
  );
};

export default OrderBook;