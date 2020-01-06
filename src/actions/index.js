import * as types from './actionTypes';
import axios from 'axios'

export function onPrev() {
    return {
        type: types.ONPREV,

    };
}

export function onNext() {
    return {
        type: types.ONNEXT,

    };

}

export function setMonth(titleMonth) {
    return {
        type: types.SET_MONTH,
        titleMonth,
    }
}

export function onCloseModal() {
    return {
        type: types.ONCLOSEMODAL,
    }
}

export function onOpenModal(year, month, day, text) {
    return {
        type: types.ONOPENMODAL,
        year,
        month,
        day,
        text,

    }
}

export function setToDo(year,month,date,text) {
    return {
        type: types.SETTODO,
        year, month, date, text,
    }
}

export function pending() {
    return {
        type:types.PENDING,
    }
}

export function success(response) {
    return {
        type:types.SUCCESS,
        response,
    }
}

export function error(response) {
    return {
        type:types.ERROR,
        response,
    }
}

export const loadList = (year, month) => dispatch => {
    dispatch(pending())
    axios.post("/api/posts/find",{ //파람으로 보내기
        data:{
            year,
            month
        }
    }).then(response=>{
        console.log("DB", "가져오기 성공! 로드 리스트 - ", response)
        dispatch(success(response))
        console.log("--------------------------------------------------------------------------");
        
        return response
    }).catch(error1 => {
        console.log("DB", "가져오기 실패ㅠ", error1)
        dispatch(error(error1))
        throw error
    })
}

export const loadDay = (year, month, day) => dispatch => {
    dispatch(pending())
    axios.post("/api/posts/findDay",{
        data:{
            year,
            month,
            day
        }
    }).then(response=>{
        console.log("DB", "가져오기 성공! 로드 데이 - ", response)
        dispatch(success(response))
        console.log("--------------------------------------------------------------------------");
        
        return response
    }).catch(error1=> {
        console.log("DB", "가져오기 실패ㅠ", error1)
        dispatch(error(error1))
        throw error
    })
}


export const updateDay = (year, month, day, text) => dispatch => {

    dispatch(pending())
    axios.patch("/api/posts",{
        data:{
            year,
            month,
            day,
            text
        }
    }).then(response=>{
        console.log("DB", "가져오기 성공! 업데이트 데이 - ", response)
        dispatch(success(response))
        console.log("--------------------------------------------------------------------------");
        
        return response
    }).catch(error1=> {
        console.log("DB", "가져오기 실패ㅠ", error1)
        dispatch(error(error1))
        throw error
    })

}

export const insertDataToDB = (year, month, day, text) => dispatch => {

    dispatch(pending())
    axios.post("/api/posts",{
        data:{
            year,
            month,
            day,
            text
        }
    }).then(response=>{
        console.log("DB", "가져오기 성공! 인설트 투 디비 - ", response)
        dispatch(success(response))
        console.log("--------------------------------------------------------------------------");
        
        return response
    }).catch(error1=> {
        console.log("DB", "가져오기 실패ㅠ", error1)
        dispatch(error(error1))
        throw error
    })

}