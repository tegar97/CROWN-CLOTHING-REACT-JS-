import React from 'react'

import './sign-in.component.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button.component'


class SigIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : ''
        }
       
    }
    handleSubmit = event => {
        event.preventDefault();
        
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
                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SigIn;

