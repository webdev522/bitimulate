import React from 'react';
import styles from './OrderBook.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrderBook = () => {
  return (
    <div className={cx('order-book')}>
      I am orderbook
    </div>
  );
};

export default OrderBook;