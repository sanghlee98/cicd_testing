import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Zach.mp4' autoPlay loop muted />
      <h1>Korean-American Scientists and Engineers Association</h1>
      <p>Texas A&M University</p>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOG IN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
