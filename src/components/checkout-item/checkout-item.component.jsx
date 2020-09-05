import React from 'react'
import {connect} from  'react-redux'
import {clearItemFromCart} from './../../redux/cart/cart.action'
import './checkout-item.styles.scss';


const CheckoutItem = ({CartItem,clearItem}) => {
    const {name,imageUrl,price,quantity} = CartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-bottom" onClick={()=> clearItem(CartItem)}>&#10005;</span>
        </div>

    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)