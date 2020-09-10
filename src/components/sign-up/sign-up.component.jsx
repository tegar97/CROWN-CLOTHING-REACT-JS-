import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle } from  './sign-up-styles'
import {SignUpStart} from './../../redux/user/user.action'
import {connect} from 'react-redux'

 class SignUp  extends Component {
     constructor() {
         super()

         this.state ={
             displayName : '',
             email : '',
             password : '',
             confirmPassword: '',
             submit: 'Submit'
         }
     }
     handleSubmit = async(e) =>{
        e.preventDefault();
        const {SignUpStart}  = this.props
        const {displayName,email,password,confirmPassword} = this.state;
        this.setState({
            submit : 'Loading....'
        })
        SignUpStart({displayName,email,password})
        this.setState({
            submit : 'Submit'
        })
        if(password !== confirmPassword) {
            alert("Password do'nt match" );
            return;
        }
        
        

     }
   
    handleChange = (event) =>{
        const {value ,name} = event.target;
       

        this.setState({ [name]: value })
     }
    render() {
        const {displayName,email,password,confirmPassword,submit} = this.state;
        return (
            <SignUpContainer className="sign-up">
                <SignUpTitle className="title">I dont not have account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName"  onChange={this.handleChange} value={displayName} label="Display Name" required/>
                    <FormInput type="text" name="email" onChange={this.handleChange} value={email} label="Email" required />   
                    <FormInput type="password" name="password" onChange={this.handleChange} value={password} label="Password" required/>           
                    <FormInput type="password" name="confirmPassword" onChange={this.handleChange} value={confirmPassword} label="repeat password" required/>                       
                    <CustomButton type="submit" onClick={this.handleLoading}>{submit}</CustomButton>      
             </form>
            </SignUpContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    SignUpStart : (userCreditial) => dispatch(SignUpStart(userCreditial))
  });

export default connect(null,mapDispatchToProps)(SignUp)