import React from 'react'

import { SignInAndSignUpContainer } from './sig-in-and-sign-up.styles.js';
import SigIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './../../redux/user/user.selectors'
import {connect} from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const SignInAndSignUpPage = () => (
  <React.Fragment>
  <SignInAndSignUpContainer>
    <SigIn />
    <SignUp />
   

  </SignInAndSignUpContainer>
  <ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover />
  
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInAndSignUpPage)