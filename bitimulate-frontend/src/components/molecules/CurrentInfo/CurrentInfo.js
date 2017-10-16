import React from 'react';
import styles from './CurrentInfo.scss';
import classNames from 'classnames/bind';
import { LabelBlock } from 'components';
import moment from 'moment';
const cx = classNames.bind(styles);

const CurrentInfo = ({info}) => {
  const { 
    lastUpdate
  } = info.toJS();

  return (
    <div className={cx('current-info')}>
      <div className={cx('')}></div>
      <LabelBlock label="Update Date">
        {moment(lastUpdate).format('YYYY MMM DD HH:mm')}
      </LabelBlock>
      <LabelBlock label="price1">
        value1
      </LabelBlock>
      <LabelBlock label="price2">
        value2
      </LabelBlock>
      <LabelBlock label="price3">
        value3
      </LabelBlock>
    </div>
  );
};

export default CurrentInfo;