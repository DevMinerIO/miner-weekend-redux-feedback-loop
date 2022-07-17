import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';



// --- REDUCERS ---
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


ReactDOM.render(<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
