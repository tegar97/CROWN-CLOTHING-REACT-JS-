import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from './../../firebase/firebase.utils'
import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import {SignInSuccess,SigninFailure} from './user.action'
import userTypes from './user.types'
import { toast } from "react-toastify";

export function* getSnapshotFromUserAuth(userAuth,isCheckUser) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth)
        const userSnapshot = yield userRef.get();

        yield put(SignInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
  
        yield toast.success(`SELAMAT DATANG KEMBALI ${userAuth.displayName ? userAuth.displayName : 'Pelanggan'}`);

        
  

    } catch (error) {
        yield put(SigninFailure(error))
    }
}
export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)

    } catch (error) {
        yield put(SigninFailure(error))
    }
}

export function* sigInWitEmail({payload: {email,password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {

        yield put(SigninFailure(error))
        yield toast.error(`${error}`);

    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth,true)
        
    } catch (error) {
        yield put(SigninFailure(error))
    }
}
export function* onGoogleSigninStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
export function* onEmailAndPasswordSigninStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START,sigInWitEmail)

} 

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* userSagas() {
    yield all([call(onGoogleSigninStart),call(onEmailAndPasswordSigninStart),call(onCheckUserSession)])
}