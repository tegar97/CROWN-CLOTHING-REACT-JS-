import {auth,googleProvider,createUserProfileDocument} from './../../firebase/firebase.utils'
import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import {googleSignInSuccess,googleSigninFailure} from './user.action'
import userTypes from './user.types'

export function* signInWithGoogle(){
    try {
        const userRef = yield auth.signInWithPopup(googleProvider)
        // const userRef = yield call(createUserProfileDocument,user)
        // const userSnapsoht = yield userRef.get()
        // yield put(googleSignInSuccess(userSnapsoht))
        console.log(userRef)
    } catch (error) {
        yield put(googleSigninFailure(error))
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSigninStart)])
}