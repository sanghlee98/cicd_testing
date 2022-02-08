import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Officers from './components/pages/Officers';
import SignUpForm from './components/pages/SignUpForm';
import Form from './components/pages/Form';
import Homepage from './components/pages/Homepage';
import MyProfile from './components/pages/MyProfile';
import {useState} from 'react';
function App() {

  const [user, setLoginUser] = useState({})

  console.log(user);
  return (
      <Router>  
        {
        (user && user._id) ? <Navbar user={user} setLoginUser={setLoginUser}/> : <Navbar />     
        }
        <Switch>
          <Route path='/' exact component={Home} user={user}>
            {
              (user && user._id) ? <Home user={user}/> : <Home />
            }  
          </Route>         
          <Route path='/upcoming event' component={Services} />
          <Route path='/contact us' component={Products} />
          <Route path='/officers' component={Officers} />
          <Route path='/sign-up' component={SignUp} setLoginUser={setLoginUser}> 
            {
              (user && user._id) ? <Home user={user}/> : <SignUp setLoginUser={setLoginUser}/>
            }
          </Route> 
          <Route path='/Sign up' component={SignUpForm} />  
          <Route path='/MyProfile' component={MyProfile} user={user}>
            {
              (user && user._id) ? <MyProfile user={user}/> : <SignUp setLoginUser={setLoginUser}/>
            }
          </Route>            
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
