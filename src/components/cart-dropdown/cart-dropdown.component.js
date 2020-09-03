import React from 'react'

import CustomBotton from './../button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
const CartDropdown  = ({cartItem}) => (
   
        <div className="cart-dropdown">
            <div className="cart-items">
            {cartItem.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
            </div>
           
            <CustomBotton>GO TO CHECKOUT</CustomBotton>
        </div>
    
)
const mapStateToProps = ({cart : {cartItem}}) => ({
    cartItem
})
export default connect(mapStateToProps)(CartDropdown)