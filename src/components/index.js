import React, { Component } from 'react';
import {connect} from 'react-redux'

import calendar from '../design/Calendar.scss';
import className from 'classnames/bind' //두번째 방법

import Days from "./days";
import Day from "./day";
import MonthTitle from './month_title';
import Modal from './modal'
import UndefinedDay from './undefinedDay'
import * as actions from '../actions'
class index extends Component {
    
    componentDidMount(){
        this.initialize()
        this.props.loadData(this.props.titleYear, this.props.titleMonth)
    }

    initialize = ()=>{

    }

    render() {
        const cx = className.bind(calendar)
        const { data } = this.props.ToDoList.toDoListItem;
        console.log('123213123',typeof data, data);
        
        if(data !== undefined){
            const aaaa = data
            console.log('111111111111111111111111111111111111111111111111111111111111', aaaa);
        }
        
        // const list = Array.from(data)
        console.log("-----------------------------!!!!!!-", this.props.loadData ,"---------------------");
        return (
            <div className={cx('page-template')}>
            {/* ------달 바꾸기------------------------------------------------------ */}
                <MonthTitle 
                titleYear = {this.props.titleYear}
                titleMonth = {this.props.titleMonth + 1}
                onPrev ={() => {this.props.handleOnPrev(this.props.titleMonth - 1)}} 
                onNext ={() => {this.props.handleOnNext(this.props.titleMonth + 1)}} 
                />
    

            {/* ------하루하루 찍기------------------------------------------------------ */}
               <Days
               setDays = {this.setDays()}
               />


            {/* ------모달 띄우기------------------------------------------------------ */}
            {console.log(this.props.ModalControl)}
            
            {this.props.ModalControl.visible?<Modal 
                handleCloseModal = {this.props.handleCloseModal}
                loadDay = {this.props.loadDay}
                loadData = {this.props.loadData}

            //  여기서부터 ------------------------

                year={this.props.modal.modalYear} 
                month = {this.props.modal.modalMonth}
                day = {this.props.modal.modalDay}

            />:<div></div>}
            </div>
        );
    }

    setDays = () => {
        let fillDay = []
        let undefinedDay = 1001;
        let day = 0;
        ////
        
        const {
            titleYear,titleMonth
        } = this.props;

        let date = new Date(titleYear, titleMonth, 1)

        // 1. 시작공백 넣기
        for( let i=0; i<date.getDay(); i++)
            fillDay.push( <UndefinedDay key={undefinedDay++}/>)

        // 2. 1,2,3,4...넣기
        date = new Date(titleYear, titleMonth+1, 0)
        for (let i=0; i<date.getDate(); i++)
            fillDay.push( <Day key={day++} 
                day = {day}
                year = {this.props.titleYear}
                month = {this.props.titleMonth} 
                handleSetToDo = {this.handleSetToDo}
                text = {this.props.ModalControl.modalText}
                data = {this.props.ToDoList.toDoListItem.data}
                insertDataToDB = {this.props.insertDataToDB}
                />)

        // 3. 끝공백 넣기
        for (let i=0; i<6 - date.getDay(); i++){
                console.log(6 - date.getDay());   
            fillDay.push( <UndefinedDay key={undefinedDay++}/>)
            }

        return fillDay
    }

        //클릭한 애의 year, month, day, text 불러옴
    handleSetToDo = (year, month, date, text) =>{
        console.log("--------------------------------");
        console.log("handleSetToDo - ",year, month + 1, date, text);
        console.log("--------------------------------");

        // this.props.handleSetToDo(new Date(this.props.titleYear, this.props.titleMonth, date, text)) //text는 아직
        this.props.handleOpenModal(year, month, date, text)
    }
}

const mapStateToProps = (state) =>{
    return {
        ...state,
        titleMonth:state.MonthTitleControl.titleMonth,
        titleYear:state.MonthTitleControl.titleYear,
        modal: state.ModalControl,

        ToDoList: state.ToDoList,
    };

}


const mapDispathToProps = (dispatch) => {
    return{
        handleOnPrev: (titleMonth) => {dispatch(actions.setMonth(titleMonth))},
        handleOnNext: (titleMonth) => {dispatch(actions.setMonth(titleMonth))},

        handleOpenModal: (year, month, date, text) =>{dispatch(actions.onOpenModal(year, month, date, text))},
        handleCloseModal: () =>{dispatch(actions.onCloseModal())},

        handleSetToDo: (year, month, date, text) => {dispatch(actions.setToDo(year, month, date, text))},

        loadData:(year, month) => {dispatch(actions.loadList(year, month))},
        loadDay:(year,month,day) => {dispatch(actions.loadDay(year, month, day))},
        updateDay:(year,month,day,text) => {dispatch(actions.updateDay(year, month, day,text))},
        insertDataToDB:(year,month,day,text) => {dispatch(actions.insertDataToDB(year, month, day,text))},
    };    
};

export default connect(
    mapStateToProps,
    mapDispathToProps,
) (index);