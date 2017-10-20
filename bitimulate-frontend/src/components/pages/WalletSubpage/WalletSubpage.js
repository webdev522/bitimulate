import React from 'react';
import styles from './WalletSubpage.scss';
import classNames from 'classnames/bind';
import { TripleWallet } from 'components';

const cx = classNames.bind(styles);

const WalletSubpage = () => {
  return (
    <div className={cx('wallet-subpage')}>
      <h1>
        My Wallet
      </h1>
      <h2>
        BTCs
      </h2>
      <TripleWallet/>
    </div>
  );
};

export default WalletSubpage;