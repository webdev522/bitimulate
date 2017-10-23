import React from 'react';
import styles from './WalletSubpage.scss';
import classNames from 'classnames/bind';
import { TripleWallet, WalletTable } from 'components';
import { TripleWalletContainer } from 'containers';

const cx = classNames.bind(styles);

const WalletSubpage = () => {
  return (
    <section className={cx('wallet-subpage')}>
      <h1>
        My Wallet
      </h1>
      <section>
        <h2>
          My Current BTCs
        </h2>
        <TripleWalletContainer/>
      </section>
      <section>
        <h2>Wallet By Currencies</h2>
        <WalletTable/>
      </section>
    </section>
  );
};

export default WalletSubpage;