import React,{useState,useEffect} from 'react'
import CustomButton from '../button/custom-button.component'
import {connect} from 'react-redux'
import {paymentFetchStart} from './../../redux/payment-gateway/payment.action'
import axios from 'axios'
function MerchantButton({dataCart,paymentFetchStart,price}) {
    // const handlePayment =() => {
 
    //     paymentFetchStart('teesssss')
    // }
    const usdToIdr = price * 14948
    
    const handlePayment = async () => {
 
       dataCart.map((data,i) =>  dataCart[i].price =  Math.round(dataCart[i].price * 14948)  )
      
       
        await axios({
            url: 'http://localhost:5000/alfamaret',
            method: 'post',
            data: {
              price: Math.round(usdToIdr),
              dataCart: dataCart
            }
          })
            .then(response => {
              
               
            })
            .catch(error => {
              console.log('Payment Error: ', error);
             
            });
    }
    return (
        <div>
            <CustomButton  type="button" onClick={handlePayment}>ALFAMARET</CustomButton>
        </div>
    )
}
const mapDispatctToProps = (dispatch) => ({
    paymentFetchStart: (dataCart) => dispatch(paymentFetchStart(dataCart))
})
export default connect(null,mapDispatctToProps)(MerchantButton)
