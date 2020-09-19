import { call, put, takeLatest,all } from 'redux-saga/effects'
import {paymentTypes} from './payment.types'
import axios from 'axios'
export function* startPayment({payload : {dataCart}}) {
    yield console.log(dataCart)
    yield console.log('tes')
}
export function* onPayment() {
    yield takeLatest(paymentTypes.PAYMENT_FETCH_REQUEST,startPayment)
}
export function* paymentSagas() {
    yield all([call(onPayment)])
} 