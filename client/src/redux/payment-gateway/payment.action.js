import {paymentTypes} from './payment.types'

export const paymentFetchStart = (dataCart) =>({
    type: paymentTypes.PAYMENT_FETCH_REQUEST,
    payload: dataCart,
})

export const paymentFetchSuccess = (dataCart) =>({
    type: paymentTypes.PAYMENT_FETCH_SUCCESS,
    payload : dataCart
})
export const paymentFetchFailure = (error) => ({
    type: paymentTypes.PAYMENT_FETCH_FAILURE,
    payload: error
})

