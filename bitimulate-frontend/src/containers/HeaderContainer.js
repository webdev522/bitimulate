import React, { Component } from 'react';
import { Header } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {

  handleLoginButtonClick = () => {
    const { BaseActions } = this.props;

    BaseActions.setScreenMaskVisibility(true);
  }

  render () {
    const { handleLoginButtonClick } = this;
    return (
      <div>
        <Header onLoginButtonClick={handleLoginButtonClick}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);