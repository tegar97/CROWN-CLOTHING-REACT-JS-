
import userTypes from './user.types'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}
const useReducer = (state = INITIAL_STATE ,action) => {
    switch (action.type) {
        case userTypes.SIGN_UP_SUCCESS:
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null
            }
        case userTypes.SIGN_UP_FAILURE:
        case userTypes.SIGN_IN_FAILURE:
        case userTypes.SIGN_OUT_FAILURE:
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