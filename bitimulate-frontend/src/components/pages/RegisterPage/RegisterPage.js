import React, {Component} from 'react';
import {
  PageTemplate,
  RegisterTemplate,
  PolyBackground,
  Paper,
  SectionWithTitle,
  Input,
  SelectCurrency,
  Option,
  Button,
  AlignRight
} from 'components';
import {HeaderContainer} from 'containers';
import styles from './RegisterPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class RegisterPage extends Component {
  state = {
    half: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({half: true});
    });
  }

  render() {
    const {half} = this.state;

    return (
      <PageTemplate header={< HeaderContainer />}>
        <PolyBackground fixed half={half}></PolyBackground>
        <Paper>
          <RegisterTemplate>
            <SectionWithTitle
              title="Nickname"
              discription="Please use a nickname in our service.">
              <Input/>
            </SectionWithTitle>
            <SectionWithTitle title="Initial Money">
              <div className={cx('description')}>
                Please set your initial money you will use in our service.{"\r\n"}You can initiate it at any time on setting page.
              </div>
              <h4>Select Currency</h4>
              <SelectCurrency/>
              <h4>Select Amount</h4>
              <Option active>₩1,000,000</Option>
              <Option>₩10,000,000</Option>
              <Option>₩100,000,000</Option>
            </SectionWithTitle>
            <AlignRight>
              <Button flat color="teal" className={cx('register-button')} xPadding="2rem">Signup</Button>
            </AlignRight>
          </RegisterTemplate>
        </Paper>
      </PageTemplate>
    );
  }
}

export default RegisterPage;