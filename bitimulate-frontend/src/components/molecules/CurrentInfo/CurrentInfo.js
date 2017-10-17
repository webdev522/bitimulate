import React from 'react';
import styles from './CurrentInfo.scss';
import classNames from 'classnames/bind';
import { LabelBlock } from 'components';
import moment from 'moment';
const cx = classNames.bind(styles);

const CurrentInfo = ({info}) => {
  const { 
    lastUpdate,
    last,
    low24hr,
    high24hr,
    highestBid,
    lowestAsk,
    baseVolume
  } = info.toJS();

  console.log(info.toJS())

  return (
    <div className={cx('current-info')}>
      <div className={cx('')}></div>
      <LabelBlock label="Update Date">
        {moment(lastUpdate).format('YYYY MMM DD HH:mm')}
      </LabelBlock>
      <LabelBlock label="Volume (24h)">
        {baseVolume}
      </LabelBlock>
      <LabelBlock label="Last">
        {last.toFixed(10)}
      </LabelBlock>
      <LabelBlock label="Low (24h)">
        {low24hr.toFixed(10)}
      </LabelBlock>
      <LabelBlock label="High (24h)">
        {high24hr.toFixed(10)}
      </LabelBlock>
      <LabelBlock label="Lowest Ask">
        {lowestAsk.toFixed(10)}
      </LabelBlock>
      <LabelBlock label="Highest Bid">
        {highestBid.toFixed(10)}
      </LabelBlock>
    </div>
  );
};

export default CurrentInfo;