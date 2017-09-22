import React from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Block = ({color, background, center, children, shadow}) => {
  const style = {
    color,
    background
  };
  return (
    <div style={style} className={cx('block', {
      center,
      shadow
    })}>
      {children}
    </div>
  );
}

export default Block;