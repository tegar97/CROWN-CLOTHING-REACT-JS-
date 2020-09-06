import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from './../../redux/cart/cart.selectors'
import  './checkout.styles.scss'
import CheckoutItem from './../../components/checkout-item/checkout-item.component'
import  StripeCheckoutButton  from '../../components/stripe-button/stripe-button.component';
const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(CartItem => 
                <CheckoutItem  key={CartItem.id} CartItem={CartItem}/>
                )
        }
        <div className="total">
            <span>${total}</span>
        </div>
        <StripeCheckoutButton/>
    </div>

)

const mapStatToProps = createStructuredSelector({
    cartItems  : selectCartItems,
    total: selectCartTotal
})
export default connect(mapStatToProps)(CheckoutPage)