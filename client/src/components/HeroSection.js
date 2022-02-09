import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/Zack-image2.jpg' style = {{width : '1900px', height : '850px'}}/>
      
      <h1>Korean-American Scientists and Engineers Association</h1>
      <p>Texas A&M University</p>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' 
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
