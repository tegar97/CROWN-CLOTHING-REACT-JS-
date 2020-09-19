import React from 'react'

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from './../../redux/cart/cart.selectors'
import MerchantButton from './../../components/merhant-button/merchant-button'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
    paymentContainer
  } from './checkout.styles';
import CheckoutItem from './../../components/checkout-item/checkout-item.component'
import  StripeCheckoutButton  from '../../components/stripe-button/stripe-button.component';
import CustomButton from '../../components/button/custom-button.component';
const CheckoutPage = ({cartItems,total}) => (
    <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} CartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
 
 
      <MerchantButton dataCart={cartItems} price={total}/>
    
      <StripeCheckoutButton price={total} />

  </CheckoutPageContainer>

)

const mapStatToProps = createStructuredSelector({
    cartItems  : selectCartItems,
    total: selectCartTotal,

})
export default connect(mapStatToProps)(CheckoutPage)