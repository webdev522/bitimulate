import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';

import {
  SectionWithTitle,
  Input,
  SelectCurrency,
  Button,
  AlignRight,
  InitialMoneyOptions
} from 'components';

const cx = classNames.bind(styles);

const RegisterForm = ({
  nickname,
  currency,
  optionIndex,
  onChangeNickname,
  onSetCurrency,
  onSelectOptionIndex,
  onSubmit
}) => {
  return (
    <div className={cx('register-form')}>
      <SectionWithTitle
        title="Nickname"
        discription="Please use a nickname in our service.">
        <Input value={nickname} onChange={onChangeNickname}/>
      </SectionWithTitle>
      <SectionWithTitle title="Initial Money">
        <div className={cx('description')}>
          Please set your initial money you will use in our service.{"\r\n"}You can initiate it at any time on setting page.
        </div>
        <h4>Select Currency</h4>
        <SelectCurrency currency={currency} onSetCurrency={onSetCurrency}/>
        <h4>Select Amount</h4>
        <InitialMoneyOptions currency={currency} optionIndex={optionIndex} onSelect={onSelectOptionIndex}/>
      </SectionWithTitle>
      <AlignRight>
        <Button flat color="teal" className={cx('register-button')} xPadding="2rem" onClick={onSubmit}>Signup</Button>
      </AlignRight>
    </div>
  );
};

export default RegisterForm;