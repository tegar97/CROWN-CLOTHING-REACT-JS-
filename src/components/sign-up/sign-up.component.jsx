import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component'

import { SignUpContainer, SignUpTitle } from  './sign-up-styles'
import {SignUpStart} from './../../redux/user/user.action'
import {connect} from 'react-redux'

 const  SignUp =  ({SignUpStart}) => {
     const [userCredentials,setUserCredentials] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword: '',
        submit: 'Submit'
     })

     const {displayName,email,password,confirmPassword} = userCredentials;
     const handleSubmit = async(e) =>{
        e.preventDefault();
        SignUpStart({displayName,email,password})
        if(password !== confirmPassword) {
            alert("Password do'nt match" );
            return;
        }
        
        

     }
   
    const handleChange = (event) =>{
        const {value ,name} = event.target;
       

        setUserCredentials({ ...userCredentials,[name]: value })
     }


        return (
            <SignUpContainer className="sign-up">
                <SignUpTitle className="title">I dont not have account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput type="text" name="displayName"  onChange={handleChange} value={displayName} label="Display Name" required/>
                    <FormInput type="text" name="email" onChange={handleChange} value={email} label="Email" required />   
                    <FormInput type="password" name="password" onChange={handleChange} value={password} label="Password" required/>           
                    <FormInput type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} label="repeat password" required/>                       
                    <CustomButton type="submit">submit</CustomButton>      
             </form>
            </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    SignUpStart : (userCreditial) => dispatch(SignUpStart(userCreditial))
  });

export default connect(null,mapDispatchToProps)(SignUp)