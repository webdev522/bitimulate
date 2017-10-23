import React from 'react';
import styles from './Wallets.scss';
import classNames from 'classnames/bind';
import { TripleWallet, WalletTable } from 'components';
const cx = classNames.bind(styles);

const Wallets = ({
  sum,
  krwRate,
  btcMultiplier,
  walletData
}) => (
  <div className={cx('wallets')}>
    <section>
      <h2>
        Total Current BTCs
      </h2>
      <TripleWallet
        btc={sum}
        usd={sum * btcMultiplier}
        krw={sum * btcMultiplier * krwRate}
      />
    </section>
    <section>
      <h2>Wallet By Coin</h2>
      <WalletTable data={walletData}/>
    </section>
  </div>
);

export default Wallets;