import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
//css
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import  SignInAndSignUpPage from './pages/sign-in-and-sign-up/sig-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component';

import {checkUserSession} from './redux/user/user.action'
const NotFound = () => {
  return(
    <h1>404</h1>
  )
}
class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {checkUserSession} = this.props
    checkUserSession()
      
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()

  }


  render(){
    const {currentUser} = this.props;

    return (
      <div>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route  path='/shop' component={ShopPage} />
         <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}  ></Route>
         <Route   component={NotFound}  >  
         </Route>
      </Switch>
      
     
      </div>
     
    )
    
  }
 
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) =>({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
