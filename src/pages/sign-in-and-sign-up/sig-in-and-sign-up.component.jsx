import React,{Component} from 'react'

import './sig-in-and-sign-up.styles.scss'
import SigIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './../../redux/user/user.selectors'
import {connect} from 'react-redux'




export class SignInAndSignUpPage extends Component {
  render() {
    const {currentUser} = this.props;
    console.log(currentUser)
    if(currentUser !== null){
      return <div className="warning"><h1>YOU HAS BEEN LOGIN , THE PAGE WILL REDIRECT .....</h1></div>
     
    }else{
      return (
        
        <div className='sign-in-and-sign-up'>
     
          <SigIn />
          <SignUp />
      

         </div>
  
      )
    }
   
   
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInAndSignUpPage)