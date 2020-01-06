import {combineReducers} from 'redux';
// import modalControl from './modalControl';
import MonthTitleControl from './monthTitleControl';
import ToDoList from './toDoList';
import ModalControl from './modalControl'
const reducer = combineReducers({
    // modalControl,
    MonthTitleControl,
    ToDoList,
    ModalControl,
})
export default reducer;