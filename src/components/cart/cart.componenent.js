import React from 'react'

import {ReactComponent as ShoppingCart} from './../../assets/shopping-bag.svg'

import './cart.styles.scss'

import {connect} from 'react-redux'

import {toggleCartHidden} from './../../redux/cart/cart.action'
const CartIcon = ({toggleCartHidden}) =>{
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchProps)(CartIcon)
