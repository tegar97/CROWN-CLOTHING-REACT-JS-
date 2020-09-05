import React from 'react'
import {connect} from  'react-redux'
import {clearItemFromCart,addItem,removeItem} from './../../redux/cart/cart.action'
import './checkout-item.styles.scss';


const CheckoutItem = ({CartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = CartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => removeItem(CartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
            <div className="arrow"  onClick={() => addItem(CartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=> clearItem(CartItem)}>&#10005;</span>
        </div>

    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)