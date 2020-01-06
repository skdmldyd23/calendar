import * as actions from '../actions/actionTypes'
const initState = {
    titleYear:new Date().getFullYear(),
    titleMonth:new Date().getMonth(),
}

export default function monthTitleControl(state = initState, action) {
    switch(action.type) {
        case actions.SET_MONTH:
            let date = new Date(state.titleYear, action.titleMonth, 1) //13월 넣으면 알아서 2020년 1월댐
            let titleYear = date.getFullYear()
            let titleMonth = date.getMonth()
            return {
                ...state,
                titleYear,
                titleMonth,
            }
        default:

            return state
    }
}



