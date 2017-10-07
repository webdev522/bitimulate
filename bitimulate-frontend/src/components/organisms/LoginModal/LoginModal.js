import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, TextButton, SocialLoginButton, InputError } from 'components';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, 
  mode, 
  forms,
  error,
  onChangeInput,
  onChangeMode,
  onLogin,
  onRegister,
  onSocialLogin
}) => {
  const isLogin = mode === 'login';
  const modeText = isLogin ? 'Login' : 'Signup';
  const invertedText = isLogin ? 'Signup' : 'Login';
  
  const {
    email,
    password
  } = forms.toJS();

  const {
    email: emailError,
    password: passwordError,
    localLogin: localLoginError
  } = error ? error.toJS() : { };
  
  const onButtonClick = isLogin ? onLogin : onRegister;

  return (
    <Modal visible={visible}>
      <div className={cx('login-modal')}>
        <div className={cx('bar')}></div>
        <div className={cx('content')}>
          <h3>{modeText} with Email</h3>
          <InputError error={localLoginError} noMarginTop/>
          <div className={cx('form')}>
            <Input 
              value={email}
              onChange={onChangeInput}
              name="email" 
              fullWidth big 
              placeholder="Email"/>
            <InputError error={emailError}/>
            <Input 
              value={password}
              onChange={onChangeInput}
              name="password" 
              fullWidth big 
              placeholder="Password" 
              type="password"/>
            <InputError error={passwordError}/>
          </div>
          <Button 
            flat color="teal" 
            flex padding="0.6rem" 
            className={cx('login')} 
            onClick={onButtonClick}>{modeText}</Button>
          <div className={cx('login-foot')}>
            <TextButton>Forgot password</TextButton>
            <TextButton right onClick={onChangeMode}>{invertedText}</TextButton>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3>{modeText} with Social Account</h3>
          <SocialLoginButton onSocialLogin={onSocialLogin}/>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;