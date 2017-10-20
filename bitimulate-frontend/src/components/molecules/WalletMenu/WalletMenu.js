import React from 'react';
import styles from './WalletMenu.scss';
import classNames from 'classnames/bind';
import { Card } from 'components';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);


const WalletMenu = () => {
  return (
    <Card className={cx('wallet-menu')} noPadding>
      <NavLink activeClassName={cx('active')} exact to="/wallet">Wallet</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/history">Trade History</NavLink>
      <NavLink activeClassName={cx('active')} to="/wallet/profit">Profit</NavLink>
    </Card>
  );
};

export default WalletMenu;