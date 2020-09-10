import React from 'react'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button.component'

import {googleSignInStart,emailSignInStart} from './../../redux/user/user.action'
import {connect} from 'react-redux'


class SigIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : ''
        }
       
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
    
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {value ,name} = event.target;
       

        this.setState({ [name]: value })
        
    

    }
    render() {
        const {googleSignInStart} = this.props
         

        return (
            <SignInContainer className='sign-in'>
                <SignInTitle>I already have a account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email"  required />
                    <FormInput name="password" type="password"  onChange={this.handleChange} value={this.state.password} label="password" required/>
                    <ButtonsBarContainer>
                  
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton  type="button" onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                    </ButtonsBarContainer>
                    
                </form>

            </SignInContainer>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  });

export default connect(null,mapDispatchToProps)(SigIn)


