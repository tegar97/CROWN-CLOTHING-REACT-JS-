
import userTypes from './user.types'
const INITIAL_STATE = {
    currentUser: null,
    error: null
}
const useReducer = (state = INITIAL_STATE ,action) => {
    switch (action.type) {
        case userTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userTypes.EMAIL_SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userTypes.GOOGLE_SIGN_IN_FAILURE:
        case userTypes.EMAIL_SIGN_IN_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case userTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state
    }


}

export default useReducer