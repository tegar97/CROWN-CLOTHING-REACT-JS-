import React from 'react'
import  {CartItemContainer,ItemDetails,Img,Name} from './cart-item.styles'
const CartItem = ({item : {imageUrl,price,name,quantity}}) => (
    <CartItemContainer >
        <img src={imageUrl} alt={name} />
        <ItemDetails >
            <Name>{name}</Name>
            <span >${price} x {quantity}</span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;