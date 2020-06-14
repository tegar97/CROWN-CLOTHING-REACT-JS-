import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB-WfM2_8AlctNvy_Co_RDvpSpPR3zGik4",
    authDomain: "crown-db-c0b68.firebaseapp.com",
    databaseURL: "https://crown-db-c0b68.firebaseio.com",
    projectId: "crown-db-c0b68",
    storageBucket: "crown-db-c0b68.appspot.com",
    messagingSenderId: "464424602847",
    appId: "1:464424602847:web:4d51ff6c8cde9985fd2d6a",
    measurementId: "G-YTNJYRBG4V"
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pompt: 'select_acount'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;
