import React from 'react';
import styles from './LoadMore.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoadMore = ({onClick}) => (
  <div className={cx('load-more')} onClick={onClick}>
    Load More
  </div>
);

export default LoadMore;