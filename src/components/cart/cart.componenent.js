import React from 'react'

import {ReactComponent as ShoppingCart} from './../../assets/shopping-bag.svg'
import {selectCartsItemsCount} from './../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'
import './cart.styles.scss'

import {connect} from 'react-redux'

import {toggleCartHidden} from './../../redux/cart/cart.action'
const CartIcon = ({toggleCartHidden,itemCount}) =>{
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
const mapStateToProps =createStructuredSelector({
 
    itemCount : selectCartsItemsCount
    
}) 
export default connect(mapStateToProps,mapDispatchProps)(CartIcon)
