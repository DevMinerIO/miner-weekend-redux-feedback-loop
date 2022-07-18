import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



// --- REDUCERS to store each input value ---
const feelingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state;
    }
}
const understandingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}
const supportReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}
const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
        default:
            return state;
    }
}
// Store so i can use and store the variables across my app.
const storeInstance = createStore(
    combineReducers(
        {
            // reducers here
            feelingsReducer,
            understandingReducer,
            supportReducer,
            commentsReducer
        }
    ),
    applyMiddleware(logger)

);

// provider included
ReactDOM.render(<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
