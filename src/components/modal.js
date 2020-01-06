
import React, { Component } from 'react';
import myModal from '../design/MyModal.scss';
import className from 'classnames/bind' //두번째 방법

class Modal extends Component {
    componentDidMount(){
        this.initialize()

        this.props.loadDay(this.props.year, this.props.month+1, this.props.day)
    }
    initialize = ()=>{ }

    render() {
        console.log("-------------------------------",this.props.loadDay.data);
        
        const {year, month, day} = this.props
        
        const cx = className.bind(myModal)
        console.log("모달 안에서 - ", year, month, day );
        console.log(this.state.text);
        
        return (
            <div id="myModal" className={cx('modal')}>
                <div className={cx('modal-content')}>
                    <span className={cx('close')} onClick={this.props.handleCloseModal}>&times;</span>                                                               
                    <p>　</p>
                    <p>{year}. {month+1}. {day}.</p>
                    {/* ------------------------텍스트 저장---------------- */}
                    <textarea className={cx('textarea')} 
                        onChange={this.handleChange} 
                        ></textarea>

                    <br/>
                    
                    {/* 버튼 누르면 할 작업들 */}
                    <button className={cx('isButton')} onClick={async () => 
                        {
                            await this.props.handleCloseModal()
                            // if(this.state.text.trim() !== ""){
                            //     await this.updateTextToDB(year, month, day, this.state.text);
                            // }
                            await this.props.loadData(this.props.year, this.props.month)
                        }} >확인</button>
                </div>
                
             </div>      
        );
    }

    state = {
        text: ''
      }
      handleChange = (e) => {
        this.setState({
          text: e.target.value
        })
      }

    onSendText = () =>{
        this.props.setText(this.state.Text);
    }
}

export default Modal;
