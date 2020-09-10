
import userTypes from './user.types'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}
const useReducer = (state = INITIAL_STATE ,action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userTypes.SIGN_IN_FAILURE:
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