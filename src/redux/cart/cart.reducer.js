import {cartTypes} from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden : true,
    cartItem : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.ADD_ITEMS : 
            return {
                ...state,
                cartItem : addItemToCart(state.cartItem,action.payload)
            }
        case cartTypes.REMOVE_ITEMS : 
            return {
                ...state,
                cartItem: removeItemFromCart(state.cartItem,action.payload)
            }
        case cartTypes.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItem: state.cartItem.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }    
        case cartTypes.CLEAR_CHART : 
            return{
                ...state,
                cartItem : []
            }
        default: 
            return state
    }
}

export default cartReducer