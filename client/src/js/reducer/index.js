import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import agenceReducer from './agenceReducer';
import offreReducer from './offreReducer';
import adminReducer from './adminReducer';
import homeReducer from'./homeReducer';
import alert from './Alert';

export default combineReducers({
    userReducer,
    postsReducer,
    alert,
    agenceReducer,
    offreReducer,
    adminReducer,
    homeReducer,
});