import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection({user}) {
  console.log(user)
  return (
    <div className='hero-container'>
      <img src='/images/Zack-image2.jpg'/>
      
      <h1>Korean-American Scientists and Engineers Association</h1>
      <p>Texas A&M University</p>
      
      <div className='hero-btns'>{
        user ?       
        <h2 style={{color: "aliceblue"}}>Howdy {user.firstname} :)</h2>
        :
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' 
        >
          SIGN IN
        </Button>
}
      </div>
    </div>
  );
}

export default HeroSection;
