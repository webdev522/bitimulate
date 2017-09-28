import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input } from 'components';

const cx = classNames.bind(styles);

const LoginModal = ({visible}) => {
  return (
    <Modal visible={visible}>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}/>
        <div className={cx('content')}>
          <h3>Login</h3>
          <div className={cx('form')}>
            <Input fullWidth big placeholder="email"/>
            <Input fullWidth big placeholder="password" type="password"/>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;