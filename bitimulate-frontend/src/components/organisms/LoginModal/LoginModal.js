import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, TextButton, SocialLoginButton } from 'components';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, 
  mode, 
  forms,
  onChangeInput,
  onChangeMode
}) => {
  const modeText = mode === 'login' ? 'Login' : 'Signup';
  const invertedText = mode === 'login' ? 'Signup' : 'Login';
  
  const {
    email,
    password,
    displayName
  } = forms.get(mode).toJS();

  return (
    <Modal visible={visible}>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}></div>
        <div className={cx('content')}>
          <h3>{modeText} with Email</h3>
          <div className={cx('form')}>
            <Input 
              value={email}
              onChange={onChangeInput}
              name="email" 
              fullWidth big 
              placeholder="Email"/>
            <Input 
              value={password}
              onChange={onChangeInput}
              name="password" 
              fullWidth big 
              placeholder="Password" 
              type="password"/>
            { mode === 'register' && (
              <Input 
                value={displayName}
                onChange={onChangeInput}
                name="displayName" 
                fullWidth big 
                placeholder="Nickname"/> 
            )}
          </div>
          <Button flat color="teal" flex padding="0.6rem" className={cx('login')}>{modeText}</Button>
          <div className={cx('login-foot')}>
            <TextButton>Forgot password</TextButton>
            <TextButton right onClick={onChangeMode}>{invertedText}</TextButton>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3>{modeText} with Social Account</h3>
          <SocialLoginButton/>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;