import React, { Component } from 'react';

import calendar from '../design/Calendar_title.scss';
import className from 'classnames/bind' //두번째 방법

const defaultProps = {
    titleYear: -1,
    titleMonth: -1,
}
class Month_title extends Component {
    render() {
        const cx = className.bind(calendar)
        console.log("Month_Title의 월 년",this.props.titleMonth,this.props.titleYear);
        
        return (
            <div className={cx('head')}>
           <button onClick={this.props.onPrev}>&lt;</button>
           <span className={cx('title')}>{this.props.titleYear}. {this.props.titleMonth}</span>
           <button onClick={this.props.onNext}>&gt;</button>
           </div>
        );
    }
}

Month_title.defaultProps = defaultProps;

export default Month_title;