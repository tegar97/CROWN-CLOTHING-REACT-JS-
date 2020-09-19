import React,{useState} from 'react'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button.component'

import {googleSignInStart,emailSignInStart} from './../../redux/user/user.action'
import {connect} from 'react-redux'


const SigIn = ({emailSignInStart,googleSignInStart}) => {
    const [userCredentials,setCreadentials] = useState({email: '',password: ''})
    
    const { email, password } = userCredentials
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }
    const handleChange = event => {
        const {value ,name} = event.target;
        setCreadentials({ ...userCredentials,[name]: value })
    }
         

        return (
            <SignInContainer className='sign-in'>
                <SignInTitle>I already have a account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name="email" type="email" value={email} onChange={handleChange} label="email"  required />
                    <FormInput name="password" type="password"  onChange={handleChange} value={password} label="password" required/>
                    <ButtonsBarContainer>
                  
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton  type="button"  onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                    </ButtonsBarContainer>
                    
                </form>

            </SignInContainer>
        )
    }



const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  });

export default connect(null,mapDispatchToProps)(SigIn)


