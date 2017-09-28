import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, TextButton, SocialLoginButton } from 'components';

const cx = classNames.bind(styles);

const LoginModal = ({visible}) => {
  return (
    <Modal visible={visible}>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}/>
        <div className={cx('content')}>
          <h3>Login By Email</h3>
          <div className={cx('form')}>
            <Input fullWidth big placeholder="email"/>
            <Input fullWidth big placeholder="password" type="password"/>
          </div>
          <Button flat color="teal" flex padding="0.6rem" className={cx('login')}>Login</Button>
          <div className={cx('login-foot')}>
            <TextButton>Forget Password</TextButton>
            <TextButton right>Sign up</TextButton>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3>Login By Social Account</h3>
          <SocialLoginButton/>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;