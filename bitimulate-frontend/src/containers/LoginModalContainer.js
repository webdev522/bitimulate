import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginModal } from 'components';

class LoginModalContainer extends Component {
  render () {
    const { visible } = this.props;
    return (
      <LoginModal visible={visible}/>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['screenMask', 'visible'])
  }),
  (dispatch) => ({

  })
)(LoginModalContainer);