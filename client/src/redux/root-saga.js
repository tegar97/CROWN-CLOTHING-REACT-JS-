import {all,call} from 'redux-saga/effects';

import {fetchCollectionStart} from  './collections/shop.sagas';
import {userSagas} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'
import {paymentSagas} from './payment-gateway/payment.sagas'
export default function* rootSaga() {
    yield all([call(fetchCollectionStart),call(userSagas),call(cartSagas),call(paymentSagas)])
}