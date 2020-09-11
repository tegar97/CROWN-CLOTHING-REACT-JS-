import React from 'react'

import {selectCartsItemsCount} from './../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'

import {CartIconContainer,ShoppingCarticon,ItemCount} from './cart.styles'

import {connect} from 'react-redux'

import {toggleCartHidden} from './../../redux/cart/cart.action'
const CartIcon = ({toggleCartHidden,itemCount}) =>{
    return (
        <CartIconContainer  onClick={toggleCartHidden}>
            <ShoppingCarticon className="shopping-icon"/>
            <ItemCount className="item-count">{itemCount}</ItemCount>
        </CartIconContainer>
    )
}
const mapDispatchProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
const mapStateToProps =createStructuredSelector({
 
    itemCount : selectCartsItemsCount
    
}) 
export default connect(mapStateToProps,mapDispatchProps)(CartIcon)
