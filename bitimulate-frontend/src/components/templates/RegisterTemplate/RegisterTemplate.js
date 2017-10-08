import React from 'react';
import styles from './RegisterTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterTemplate = ({children}) => {
  return (
    <div className={cx('register-template')}>
      <h1>Register</h1>
      <p>It's almost done, please input some information needed for trading.</p>
      <section>
        {children}
      </section>
    </div>
  );
};

export default RegisterTemplate;