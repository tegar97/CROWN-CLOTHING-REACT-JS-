import React from 'react';
import {Switch,Route} from 'react-router-dom'

//css






const tes = () => (
    <h1>tes</h1>
)
function App() {
  return (
    <div>
  
    <Switch>

       <Route exact path='/tes' component={tes} />
    </Switch>
    
   
    </div>
   
  )
 
}

export default App;
