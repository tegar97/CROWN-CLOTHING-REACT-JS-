import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors'
import {setCurrentUser} from './redux/user/user.action'
import {createStructuredSelector} from 'reselect'
//css
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import  SignInAndSignUpPage from './pages/sign-in-and-sign-up/sig-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import CheckoutPage from './pages/checkout/checkout.component';

const NotFound = () => {
  return(
    <h1>404</h1>
  )
}
class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){

    const {setCurrentUser} = this.props;
    
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
        // this.setState({currentUser: user})
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          await userRef.onSnapshot(snapShot =>{
             this.setState({
              setCurrentUser : {
                 id: snapShot.id,
                 ...snapShot.data()
               }
             },)
          })
   
        }
        setCurrentUser(userAuth)
      });
      
  }

  componentWillUnmount() {
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
