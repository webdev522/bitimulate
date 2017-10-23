import React from 'react';
import styles from './WalletTable.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Row = () => (
  <div className={cx('row')}>
    <div className={cx('col', 'coin')}>Coin</div>
    <div className={cx('col', 'name')}>Name</div>
    <div className={cx('col', 'has')}>Amount</div>
    <div className={cx('col', 'waiting')}>Waiting</div>
    <div className={cx('col', 'btc')}>BTC Price</div>
  </div>
)

const WalletTable = () => {
  return (
    <div className={cx('wallet-table')}>
      <div className={cx('table-head')}>
        <div className={cx('col', 'coin')}>Coin</div>
        <div className={cx('col', 'name')}>Name</div>
        <div className={cx('col', 'has')}>Amount</div>
        <div className={cx('col', 'waiting')}>Waiting</div>
        <div className={cx('col', 'btc')}>BTC Price</div>
      </div>
      <div className={cx('rows')}>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </div>
    </div>
  );
};

export default WalletTable;