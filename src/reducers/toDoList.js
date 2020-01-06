import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions'


const initialState = {
    pending:false,
    error:false,
    toDoListItem:[],
}
//리듀서 = 클래스 이고, 클래스는 set, list관련(sort, add, delete)함수만 갖는다.
//DB에서 가져오는 친구역시 set이다 -> set(DB자료) 와 같이 쓰임
//근데 기존 set이랑은 살짝 냄새가 다르니 load()라고 하자


// 클래스=리듀서 만들면 최초1를 그려주면 앞으로는 알아서 다 그려줌
// 근데 db에서 값을 가져오는 경우는 최초 1회때 initState가 없으니 요래조래


export default function toDoList(state = initialState, action) {
    switch(action.type) {
        case actionTypes.PENDING:
            return {
                ...state,
                pending:true,
                error:false,
            }
        case actionTypes.SUCCESS:
            return {
                ...state,
                pending:false,
                error:false,
                toDoListItem:action.response,
            }
        case actionTypes.ERROR:
            return {
                ...state,
                pending:false,
                error:true,
            }
        default:
            return state
    }
}