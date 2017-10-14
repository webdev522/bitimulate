import React from 'react';
import styles from './TradeIndexOptions.scss';
import classNames from 'classnames/bind';
import { Selector, SortReverser } from 'components';

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
    text: 'Price'
  },
  {
    name: 'volume',
    text: 'Volume'
  }
];

const TradeIndexOptions = ({
  sortBy,
  asc,
  onToggleAsc,
  onSelectSort
}) => {
  return (
    <div>
      <div className={cx('options')}>
        <div className={cx('selector')}>
          <Selector options={sorterOptions} value={sortBy} onSelect={onSelectSort}/>
        </div>
        <div className={cx('reverser')}>
          <SortReverser asc={asc} onToggle={onToggleAsc}/>
        </div>
      </div>
    </div>
  );
};

export default TradeIndexOptions;