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

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})