import React from 'react';
import styles from './ProfitChart.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProfitChart = () => (
  <div>
    <h2>Profit Chart</h2>
    <div className={cx('not-available')}>
      It will be coming soon.
    </div>
  </div>
);

export default ProfitChart;