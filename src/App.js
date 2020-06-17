import React from 'react';
import {Switch,Route} from 'react-router-dom'

//css
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sig-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'

const NotFound = () => {
  return(
    <h1>404</h1>
  )
}
class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
        this.setState({currentUser: user})

        console.log(user)
      });
      
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route  path='/shop' component={ShopPage} />
         <Route  path="/signin" component={SignInAndSignUp} />
         <Route   component={NotFound} />
      </Switch>
      
     
      </div>
     
    )
    
  }
 
}

export default App;
