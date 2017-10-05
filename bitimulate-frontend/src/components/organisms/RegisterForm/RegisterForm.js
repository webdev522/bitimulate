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
  displayNameExists,
  error,
  onChangeNickname,
  onSetCurrency,
  onSelectOptionIndex,
  onSubmit,
  onNicknameBlur
}) => {
  return (
    <div className={cx('register-form')}>
      <SectionWithTitle
        title="Nickname"
        discription="Please use a nickname in our service.">
        { 
          displayNameExists && <div className={cx('error')}>Already taken nickname</div>
        }
        <Input maxLength={15} value={nickname} onChange={onChangeNickname} onBlur={onNicknameBlur}/>
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
      { 
        error && (
          <AlignRight>
            <div className={cx('error')}>{error}</div>
          </AlignRight>
        )
      }
      <AlignRight>
        <Button disabled={displayNameExists || error} flat color="teal" className={cx('register-button')} xPadding="2rem" onClick={onSubmit}>Signup</Button>
      </AlignRight>
    </div>
  );
};

export default RegisterForm;