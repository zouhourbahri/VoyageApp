import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const initialState = {};
const store = createStore(combineReducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store ;
