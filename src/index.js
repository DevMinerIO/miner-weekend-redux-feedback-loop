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
const example = (state = [], action) => {
    switch (action.type) {
        case 'GET_PIZZA_LIST':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers(
        {
            // reducers here
            example
        }
    ),
    applyMiddleware(logger)

);


ReactDOM.render(<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
