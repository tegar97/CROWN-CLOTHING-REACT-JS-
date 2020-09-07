import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDrtebiDL-yBfo350XGTO-aY3Xo0YgKnqE",
    authDomain: "crown-db-asia-tenggara.firebaseapp.com",
    databaseURL: "https://crown-db-asia-tenggara.firebaseio.com",
    projectId: "crown-db-asia-tenggara",
    storageBucket: "crown-db-asia-tenggara.appspot.com",
    messagingSenderId: "840154594554",
    appId: "1:840154594554:web:1f16d2cfe1e98a06e55d43",
    measurementId: "G-JK34TYLJG9"
}

export const createUserProfileDocument= async(userAuth, additionalData) => {
    if(!userAuth) return;
        const userRef = firestore.doc(`user/${userAuth.uid}`);
        const snapshot =  await userRef.get()

    if(!snapshot.exists) {
        const {displayName , email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
            
        }

        
    }
    return userRef
}
firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore()

// export const addCollectionAndDocuments = async(collectionKey,objectToAdd) =>{
//     const collectionRef = firestore.collection(collectionKey)
//     const batch = firestore.batch()
//     objectToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc()
//         console.log(newDocRef)
//         batch.set(newDocRef,obj)
//     })
//     return await batch.commit()
// }

export const convertCollectionsSnapshotToMap = (collection) => {
    const transformed = collection.docs.map(doc => {
        const {title,items} = doc.data()
        return {
            routeName : encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items    
            
        }
    })
    console.log(transformed)

   
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pompt: 'select_acount'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;
