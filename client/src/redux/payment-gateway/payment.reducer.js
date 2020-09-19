import {paymentTypes} from './payment.types'
const INITIAL_STATE ={
    dataCart : [],
    error: ''
}
 const paymentReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case paymentTypes.PAYMENT_FETCH_SUCCESS :
            return{
                ...state,
                dataCart : action.payload,
                error: ''
            }
        case paymentTypes.PAYMENT_FETCH_FAILURE :
            return{
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}
export default paymentReducer