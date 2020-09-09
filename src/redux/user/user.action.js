import userTypes from './user.types'
export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload : user
})

export const googleSignInStart = () =>({
    type: userTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = (user) => ({
    type: userTypes.GOOGLE_SIGN_IN_SUCESS,
    payload: user
})

export const googleSigninFailure = error => ({
    type: userTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})


export const emailSignInStart = (emailAndPassword) =>({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const emailSignInSuccess = (user) => ({
    type: userTypes.EMAIL_SIGN_IN_SUCESS,
    payload: user
})

export const emailSigninFailure = error => ({
    type: userTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
})


