import React from 'react';
import '../../App.css';
import { Button, Form, FormGroup, Label, Input}
  from 'reactstrap';
import Homepage from "./Homepage.js"
import {GoogleLogin} from 'react-google-login'
import {useState, useEffect} from 'react';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios"

const initialState = {email:'', password: ''};
// const [formData, setFormData] = useState(initialState);

// const handleSubmit = (e) => {
//   e.preventDefault();

//   console.log(initialState);
// };

// const handleChange = (e) => {

//   setFormData({...FormData, [e.target.name]: e.target.value})
// };


// export default function SignUp({setLoginUser}) {
const SignUp = ({setLoginUser}) => {
  // const [formData, setFormData] = useState(initialState);
  // const [formData, setFormData] = useState(initialState);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(initialState);
  // };

  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value });
  // };

  const history = useHistory();

  const [values, setValues] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
    const {name, value} = e.target    
    setValues({
      ...values,
      [name]: value
    })

  }

  const login = (event) => {
    event.preventDefault();
    axios.post("/api/login", values)
    .then(res => {
      console.log(res)
      if(res.data.message === "Login Successful. Welcome To KSEA"){
        alert(res.data.message)
        console.log(res.data.user)
        setLoginUser(res.data.user)      
        history.push("/Homepage")
      }
      else{
        console.log(res.data)        
        alert(res.data.message)
      }
    })
    
  }

  return (
    
    <div className = "form_container">
    <div className = "form_wrapper">
      {console.log(values)}      
      <div> 
      <h1 className = "form_title">Howdy!</h1>                
      <h2 className = "form_title">Welcome to KSEA TAMU Chapter</h2>                
      </div>
      <form className="form-wrapper">                
          <div className = "sign-up_name">
            <label className ="sign_up_label">Email</label>           
            <input className = "sign_up_input" type="email" name="email" value = {values.email} placeholder="your_email@tamu.edu" onChange = {handleChange}/>
          </div>
          <div className = "sign-up_email">
                    <label className ="sign_up_label">Password</label>
                    <input className = "sign_up_input" type="password" name="password" value = {values.password} placeholder = "password" onChange = {handleChange}/>
                    
          </div>
          <div>
                    <button className ="submit" onClick={login}> Log In</button>
          </div>

          <FacebookLoginButton 
              style={{
                justifyContent: 'center !important',
                borderRadius: '1vh',
                marginTop: '20px',
                marginBottom: '20px',
                alignItems: 'center !important'
              }}/>
          <GoogleLoginButton               
              style={{
                borderRadius: '1vh',
                marginBottom: '16px'
              }}
                
          />
        <div className="text-center">    
          <Link to='/Sign up'>Sign Up</Link>
          <span className="p2">|</span>
          <a href="/Forgot-password"> Forgot password?</a>
        </div>  
    </form>
    </div>
</div>
 );
}
export default SignUp