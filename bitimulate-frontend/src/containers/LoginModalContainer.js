import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginModal } from 'components';
import onClickOutside from 'react-onclickoutside'

class LoginModalContainer extends Component {
  handleClickOutside = evt => {
    console.log('aaaaa');
    const { visible } = this.props;
    if (!visible) return;
    alert('aa');
  }
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
)(onClickOutside(LoginModalContainer));