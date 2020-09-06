import React from 'react'
import  {CartItemContainer,ItemDetails,ItemName,Name} from './cart-item.styles'
const CartItem = ({item : {imageUrl,price,name,quantity}}) => (
    <CartItemContainer >
        <img src={imageUrl} alt={name} />
        <ItemDetails >
            <ItemName>{name}</ItemName>
            <span >${price} x {quantity}</span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;