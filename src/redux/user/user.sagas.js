import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from './../../firebase/firebase.utils'
import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import {SignInSuccess,SigninFailure,SignoutSuccess,SignoutFailure,SignUpSuccess,SignUpFailure} from './user.action'
import userTypes from './user.types'
import { toast } from "react-toastify";

export function* getSnapshotFromUserAuth(userAuth,isCheckUser) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth)
        const userSnapshot = yield userRef.get();

        yield put(SignInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
        if(!isCheckUser) {
            yield toast.success(`SELAMAT DATANG KEMBALI ${userAuth.displayName ? userAuth.displayName : 'Pelanggan'}`);

        }

        
  

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
export function* SignUp({payload: {email,password,displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password)
        yield put(SignUpSuccess({user,additionalData: {displayName}}))
        

    } catch (error) {
        yield put(SignUpFailure(error))
    }
}
export function* afterSignUpSuccess({payload: {user,displayName}}) {
    try {
        yield getSnapshotFromUserAuth({user,additionalData: {displayName}})
    } catch (error) {
        yield put(SignUpFailure(error))
        
    }
}
export function* signOut()  {
    try {
        yield auth.signOut()
        yield put(SignoutSuccess())
        yield toast.success(`Berhasil logout`);

    } catch (error) {
        yield put(SignoutFailure())
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

export function* onSignOut() {
    yield takeLatest(userTypes.SIGN_OUT_START,signOut)
}

export function* onSignUp() {
    yield takeLatest(userTypes.SIGN_UP_START,SignUp)
}
export function* onSignUpSuccess() {
    yield takeLatest(userTypes.SIGN_UP_SUCCESS,afterSignUpSuccess)
}

export function* userSagas() {
    yield all([call(onGoogleSigninStart),call(onEmailAndPasswordSigninStart),call(onCheckUserSession),call(onSignOut),call(onSignUp)])
}