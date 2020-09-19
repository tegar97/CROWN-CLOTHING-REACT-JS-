import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
const StripeCheckoutButton = ({price}) => {
    
    const priceForStripe = price * 100;
    const publishableKey  = 'pk_test_ALq5FzD2iG4AqmtKvbrHz1Ij00kVa99ImV'
    const onToken = token => {
        axios({
          url: 'http://localhost:5000/payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
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