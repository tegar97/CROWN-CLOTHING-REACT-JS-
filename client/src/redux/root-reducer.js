import {combineReducers} from 'redux';

//persist for passing cart item to localstorage 
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//redux reducer
import useReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './collections/shop.reducer'
import paymentReducer from './payment-gateway/payment.reducer'
const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: useReducer,
    cart : cartReducer,
    directory: directoryReducer,
    shop : shopReducer,
    payment: paymentReducer
})
export default persistReducer(persistConfig,rootReducer) 