import React from 'react'
import {connect} from  'react-redux'
import {clearItemFromCart,addItem,removeItem} from './../../redux/cart/cart.action'
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item.styles';

const CheckoutItem = ({CartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = CartItem
    return (
        <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeItem(CartItem)}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => addItem(CartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(CartItem)}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>

    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)