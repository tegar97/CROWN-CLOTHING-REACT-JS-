import {cartTypes} from './cart.types'
export const toggleCartHidden = () => (
 {
    type: cartTypes.TOGGLE_CART_HIDDEN
 }
)
export const addItem = item => (
    {
        type: cartTypes.ADD_ITEMS,
        payload: item
    }
)  
export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEMS,
    payload: item
})
export const clearItemFromCart= item => ({
    type: cartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})