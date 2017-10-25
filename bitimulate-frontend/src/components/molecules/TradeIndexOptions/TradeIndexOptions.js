import React from 'react';
import styles from './TradeIndexOptions.scss';
import classNames from 'classnames/bind';
import { Selector, SortReverser, Option, Button } from 'components';
// import PinIcon from 'react-icons/lib/ti/pin';

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
  showPinned,
  asc,
  onToggleAsc,
  onSelectSort,
  onAutoPin,
  onToggleShowPinned
}) => {
  return (
    <div>
      <div className={cx('options')}>
        <div className={cx('show-pinned')}>
          {/* <Option onClick={onToggleShowPinned} active={showPinned}> */}
          <Option onClick={onToggleShowPinned} active={showPinned}>
            <div className={cx('option-info')}>Show Pinned</div>
          </Option>
        </div>
        <div className={cx('auto-pin')}>
          <Button flat onClick={onAutoPin} theme="outline">Set My BTCs Pinned</Button>  
        </div>
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