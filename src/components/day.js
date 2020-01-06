import React, { Component } from 'react';
import calendar from '../design/Calendar_body.scss';
import className from 'classnames/bind' //두번째 방법

class Day extends Component {
  render() {
    const {year, month, day, text, data} = this.props;
    let nowYoSo="";
    
    if(data !== undefined){
     
      for(let i = 0; i < data.length; ++i){
        console.log("dadadadaffaag e  33 y3 y 33 ", data[i].month);
        if(data[i].day === day && data[i].month === month + 1 && data[i].year === year){
          nowYoSo = data[i];
        }
      }
    }
    const cx = className.bind(calendar)

    return (
      <div className={cx('box')}>
        <span className={cx('text')} 
        onClick = { async () =>{
           await this.props.handleSetToDo(year, month, day, nowYoSo)
           if(text.trim().length !== 0)
            await this.props.insertDataToDB(year, month, day, text);
          }

          }>{this.props.day}
          <br/>
          {nowYoSo===undefined?"":nowYoSo.text}</span>
      </div>
    );
  }
}

export default Day;

