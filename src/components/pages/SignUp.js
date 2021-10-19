import React from 'react';
import '../../App.css';
import { Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';



export default function SignUp() {
  return (
    <form className>
    <div className="form-inner">

      <h1><span className="font-weight-bold">K S E A</span></h1>
      <h2>Texas A&M Chapter</h2>

    <div className= "form-group">
      <FormGroup>
        <Label className='login-label'>Email</Label>
        <Input type = "email" className='login-input' placeholder="Email"/>
      </FormGroup>


      <FormGroup>
        <Label className='login-label'>Password</Label>
        <Input type = "password" className='login-input' placeholder="password"/>
      
      </FormGroup>
    </div>

      <Button className='btn--outline'>
          Continue
      </Button>
      
      <hr
      style={{
        marginBottom: '16px'
      }}

      />
      
      <FacebookLoginButton 
              style={{
                justifyContent: 'center !important',
                borderRadius: '30vh',
                marginBottom: '16px',
                alignItems: 'center !important'
              }}/>
      <GoogleLoginButton               style={{
                borderRadius: '30vh',
                marginBottom: '16px'
              }}/>
              
      <div className="text-center">
        <a href="/sign-up">Sign up </a>
        <span className="p2">|</span>
        <a href="/Forgot-password"> Forgot password?</a>
      </div>  
     
  </div>
  
  </form>
 );
}
