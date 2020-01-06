import React, { Component } from 'react';
import calendar from '../design/Calendar_body.scss';
import className from 'classnames/bind' //두번째 방법

class Week extends Component {
    render() {
        const cx = className.bind(calendar)
        return (
            <div  className={cx('weekBody')}>
              <div className={cx('weekRow')}>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>SUN</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>MON</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>TUE</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>WED</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>THU</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>FRI</span>
                </div>
                <div className={cx('weekBox')}>
                  <span className={cx('weekText')}>SAT</span>
                </div>
              </div>
             </div>
        );
    }
}

export default Week;