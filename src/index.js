import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from'./reducers';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import * as actions  from "./actions"; 
import thunk from 'redux-thunk'
const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() =>{console.log(store.getState())});

store.dispatch(actions.onPrev())
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
