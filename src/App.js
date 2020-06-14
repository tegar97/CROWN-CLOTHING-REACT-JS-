import React from 'react';
import {Switch,Route} from 'react-router-dom'

//css
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sig-in-and-sign-up.component'

const NotFound = () => {
  return(
    <h1>404</h1>
  )
}
function App() {
  return (
    <div>
    <Header/>
    <Switch>
       <Route exact path='/' component={HomePage} />
       <Route  path='/shop' component={ShopPage} />
       <Route  path='/signin' component={SignInAndSignUp} />
       <Route   component={NotFound} />
    </Switch>
    
   
    </div>
   
  )
 
}

export default App;
