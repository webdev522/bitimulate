import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterTemplate = ({children}) => {
  return (
    <div className={cx('register-template')}>
      <h1>Register</h1>
      <p>asdfasdfafd</p>
      <section>
        {children}
      </section>
    </div>
  );
};

export default RegisterTemplate;