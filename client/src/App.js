import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignUpForm from './components/pages/SignUpForm';
import Form from './components/pages/Form';
import Homepage from './components/pages/Homepage';
import {useState} from 'react';
function App() {

  const [user, setLoginUser] = useState({})
  return (
      <Router>  
        <Navbar />      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upcoming event' component={Services} />
          <Route path='/contact us' component={Products} />
          <Route path='/sign-up' component={SignUp} setLoginUser={setLoginUser}> 
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <SignUp setLoginUser={setLoginUser}/>
            }
          </Route> 
          <Route path='/Sign up' component={SignUpForm} />  
          <Route path='/Homepage' setLoginUser={setLoginUser} component={Homepage} />          
        </Switch>
      </Router>          
      // <Router>  
      //   <Navbar />      
      //   <Switch>
      //     <Route exact path='/' element = {user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <SignUp setLoginUser={setLoginUser}/>}>            

      //     </Route>
      //     <Route path='/upcoming event' component={Services} />
      //     <Route path='/contact us' component={Products} />
      //     <Route path='/sign-up' component={SignUp} setLoginUser={setLoginUser}> 
      //     </Route> 
      //     <Route path='/Sign up' component={SignUpForm} />  
      //     <Route path='/Homepage' setLoginUser={setLoginUser} component={Homepage} />          
      //   </Switch>
      // </Router>    
  );
}

export default App;
