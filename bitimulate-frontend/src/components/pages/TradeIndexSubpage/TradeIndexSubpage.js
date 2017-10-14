import React from 'react';
import styles from './TradeIndexSubpage.scss';
import classNames from 'classnames/bind';
import { Selector, SortReverser } from 'components';
import { TradeIndexContainer } from 'containers';

const cx = classNames.bind(styles);
const sorterOptions = [
  {
    name: 'alphabet',
    text: 'Alphabet'
  },
  {
    name: 'percentage',
    text: 'Percentage'
  },
  {
    name: 'price',
    text: 'VPrice'
  },
  {
    name: 'volume',
    text: 'Volume'
  }
];

const TradeIndexSubpage = () => {
  return (
    <div className={cx('trade-index-subpage')}>
      <div className={cx('options')}>
        <div className={cx('selector')}>
          <Selector options={sorterOptions}/>
        </div>
        <div className={cx('reverser')}>
          <SortReverser asc/>
        </div>
      </div>
      <TradeIndexContainer/>
    </div>
  );
};

export default TradeIndexSubpage;