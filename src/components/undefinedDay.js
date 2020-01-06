import React, { Component } from 'react';
import calendar from '../design/Calendar_body.scss';
import className from 'classnames/bind' //두번째 방법

class UndefinedDay extends Component {
  render() {
    const cx = className.bind(calendar)
    return (
      <div className={cx('box')}>
        <span className={cx('undefined')}></span>
      </div>
    );
  }
}

export default UndefinedDay;