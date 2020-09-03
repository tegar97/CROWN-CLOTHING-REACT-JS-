import React from 'react'

import CustomBotton from './../button/custom-button.component'

import './cart-dropdown.styles.scss'
const CartDropdown  = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomBotton>GO TO CHECKOUT</CustomBotton>
        </div>
    )
}

export default CartDropdown
