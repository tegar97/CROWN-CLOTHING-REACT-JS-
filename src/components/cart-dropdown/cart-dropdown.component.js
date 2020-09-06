import React from 'react'


import {selectCartItems} from './../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import {toggleCartHidden } from './../../redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import {CartDropdownContainer,CartItemsContainer,EmptyMessage,Button} from './cart-dropdown.styles'


import {connect} from 'react-redux'
const CartDropdown  = ({cartItems,history,dispatch}) => (
   
        <CartDropdownContainer >
            <CartItemsContainer >
            {cartItems.length ? 
                cartItems.map(cartItem => (
                
                <CartItem key={cartItem.id} item={cartItem}/>
               
            ))  :
            <EmptyMessage >Your cart is empty</EmptyMessage>}
            </CartItemsContainer>
           
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    
)
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))