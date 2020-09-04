import {createSelector } from 'reselect';

const selectCart = state => state.cart;

export const  selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
    
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartsItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator,cartItem) => accumulator + cartItem.quantity,0)
)