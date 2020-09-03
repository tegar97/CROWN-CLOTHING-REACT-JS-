import {combineReducers} from 'redux';

import useReducer from './user/user.reducer';

export default combineReducers({
    user: useReducer
})