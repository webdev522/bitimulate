import React from 'react';
import styles from './UserMenu.scss';
import classNames from 'classnames/bind';
import { Card } from 'components';

const cx = classNames.bind(styles);
// Class
const UserMenu = () => (
  <div className={cx('user-menu')}>
    <Card className={cx('card', 'enter')} noPadding>
      <div className={cx('menu-item')}>Logout</div>
    </Card>
  </div>
);

export default UserMenu;