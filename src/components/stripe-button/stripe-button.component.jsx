import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey  = 'pk_test_ALq5FzD2iG4AqmtKvbrHz1Ij00kVa99ImV'
    const onToken =(token) => {
        console.log(token)
        alert('Payment Succes')
    }
    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN ClothingLTD"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton