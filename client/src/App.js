import React,{useEffect,Suspense,lazy} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
//css
import './App.css';

import Header from './components/header/header.component';

import {checkUserSession} from './redux/user/user.action'


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spiner from './components/spiner/Spiner.component';

//Lazy Load

const HomePage = lazy(() =>import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sig-in-and-sign-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const NotFound = () => {
  return(
    <h1>404</h1>
  )
}
const App = ({checkUserSession,currentUser}) => {

    useEffect(() => {
   
      checkUserSession()
    },[checkUserSession])


    return (
      <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spiner/>}>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}  ></Route>
          <Route   component={NotFound} /> 
  
        </Suspense>
      </Switch>
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
     
      </div>
     
    )
    
  }
 


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) =>({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
