import { call, put, takeLatest,all } from 'redux-saga/effects'
import userTypes from './../user/user.types'
import {clearChart} from './cart.action'

export function* ClearChart() {

    yield put(clearChart())
   
}
export function* onClearChart(){
    yield takeLatest(userTypes.SIGN_OUT_SUCCESS,ClearChart) 
}

export function* cartSagas() {
    yield all([call(onClearChart)])
}