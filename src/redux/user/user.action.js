import userTypes from './user.types'
import { toast } from "react-toastify";


export const googleSignInStart = () =>({
    type: userTypes.GOOGLE_SIGN_IN_START
})


export const emailSignInStart = (emailAndPassword) =>({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
    
})

// export const SignInSuccess = (user) => ({
//     type: userTypes.SIGN_IN_SUCCESS,
//     payload: user,
    
    
// })
export const SignInSuccess = (user) =>({
    type:  userTypes.SIGN_IN_SUCCESS,
    payload: user
    

  })
export const SigninFailure = error => ({
    type: userTypes.SIGN_IN_FAILURE,
    payload: error
})

export const SignoutStart = () => ({
    type: userTypes.SIGN_OUT_START
})

export const SignoutSuccess = () =>({
    type: userTypes.SIGN_OUT_SUCCESS
})
export const SignoutFailure = (error) =>({
    type: userTypes.SIGN_OUT_FAILURE,
    payload :error
})


export const SignUpStart = (userData) =>({
    type: userTypes.SIGN_UP_START,
    payload: userData
})
export const SignUpSuccess = ({ user, additionalData }) =>({
    type: userTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
})

export const SignUpFailure = (error) => ({
    type: userTypes.SIGN_UP_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})