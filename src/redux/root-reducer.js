import {combineReducers} from 'redux';

import useReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: useReducer,
    cart : cartReducer
})