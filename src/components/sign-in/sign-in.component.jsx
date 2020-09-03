import React from 'react'

import './sign-in.component.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button.component'

import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

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
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email : '',password : ''})
        } catch (error) {
            console.log(error)
        }
        
        this.setState({email: '',password: ''})
    }

    handleChange = event => {
        const {value ,name} = event.target;
       

        this.setState({ [name]: value })
        
    

    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="email"  required />
                    <FormInput name="password" type="password"  onChange={this.handleChange} value={this.state.password} label="password" required/>
                    <div className="button">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SigIn;

