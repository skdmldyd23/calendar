import * as actions from '../actions/actionTypes'
const initState = {
        modalYear:new Date().getFullYear(),
        modalMonth:new Date().getMonth(),
        modalDay:1,
        modalText:"11111", 
        
        visible:false,
}

export default function modalControl(state = initState, action) {
    switch(action.type) {
        case actions.ONOPENMODAL:
            return {
                ...state,
                visible:true,
                modalYear:action.year,
                modelMonth:action.month,
                modalDay:action.day,
                modalText:action.text,
            }
            case actions.ONCLOSEMODAL :
                    return { 
                        ...state,
                        visible: false,
                    }
        default:

            return state
    }
}
