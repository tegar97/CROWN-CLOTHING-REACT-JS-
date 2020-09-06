import React from 'react'

import { SignInAndSignUpContainer } from './sig-in-and-sign-up.styles.js';
import SigIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './../../redux/user/user.selectors'
import {connect} from 'react-redux'




const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SigIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInAndSignUpPage)