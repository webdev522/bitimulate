import React from 'react';
import styles from './PublicTradeHistory.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// // date | type | price | amount
const PublicTradeHistory = () => {
  return (
    <div className={cx('public-trade-history')}>
      <div className={cx('title')}>
        Transaction List
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
        <div className={cx('row')}>
          <div className={cx('col', 'time')}>
            Time
          </div>
          <div className={cx('col', 'type')}>
            Kind
          </div>
          <div className={cx('col')}>
            Price
          </div>
          <div className={cx('col')}>
            Amount
          </div>
        </div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
        <div className={cx('row')}>ㅇ</div>
      </div>

    </div>
  );
};

export default PublicTradeHistory;