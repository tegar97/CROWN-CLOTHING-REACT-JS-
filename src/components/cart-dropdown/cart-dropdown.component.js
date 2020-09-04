import React from 'react'

import CustomBotton from './../button/custom-button.component'
import {selectCartItems} from './../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
const CartDropdown  = ({cartItems,history}) => (
   
        <div className="cart-dropdown">
            <div className="cart-items">
            {cartItems.length ? 
                cartItems.map(cartItem => (
                
                <CartItem key={cartItem.id} item={cartItem}/>
               
            ))  :
            <span class="empty-message">Your cart is empty</span>}
            </div>
           
            <CustomBotton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomBotton>
        </div>
    
)
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))