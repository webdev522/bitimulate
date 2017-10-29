import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'store/modules/user';
import { TradeHistoryTable } from 'components';

class WalletHistories extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>Waiting Trade</h2>
          <TradeHistoryTable forPage/>
        </section>
        <section>
          <h2>Processed Trade</h2>
          <TradeHistoryTable forPage/>
        </section>
      </div>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(WalletHistories);