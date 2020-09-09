import React from 'react'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button.component'

import {googleSignInStart} from './../../redux/user/user.action'
import {connect} from 'react-redux'
class SigIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : ''
        }
       
    }
    // handleSubmit = async event => {
    //     event.preventDefault();
    //     const {email,password} = this.state;
    //     try {
    //         await auth.signInWithEmailAndPassword(email,password)
    //         this.setState({email : '',password : ''})
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    //     this.setState({email: '',password: ''})
    // }

    // handleChange = event => {
    //     const {value ,name} = event.target;
       

    //     this.setState({ [name]: value })
        
    

    // }
    render() {
        const {signInWithGoogle} = this.props
        return (
            <SignInContainer className='sign-in'>
                <SignInTitle>I already have a account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email"  required />
                    <FormInput name="password" type="password"  onChange={this.handleChange} value={this.state.password} label="password" required/>
                    <ButtonsBarContainer>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton  type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}


const mapDispatchProps = dispatch => ({
    signInWithGoogle : () =>  dispatch(googleSignInStart())
})

export default connect(null,mapDispatchProps)(SigIn)


