import React from 'react';
import styles from './ScreenMask.scss';
import classNames from 'classnames/bind';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const cx = classNames.bind(styles);

const ScreenMask = ({visible}) => {
  return (
    <CSSTransitionGroup
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      transitionName={{
        enter: cx('fade-enter'),
        leave: cx('fade-leave')
      }}
    >
      { visible && <div className={cx('screen-mask')}/> }
    </CSSTransitionGroup>
  );
};

export default ScreenMask;