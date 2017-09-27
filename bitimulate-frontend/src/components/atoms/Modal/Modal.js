import React, { Component } from 'react';
import styles from './Modal.scss';
import classNames from 'classnames/bind';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const cx = classNames.bind(styles);

class Modal extends Component {
  render() {
    const { visible, children } = this.props;

    return (
      <div className={cx('modal-wrapper')}>
        <CSSTransitionGroup
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionName={{
            enter: cx('enter'),
            leave: cx('leave')
          }}
        >
          { visible && <div className={cx('modal')}>
            {children}
          </div>}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Modal;