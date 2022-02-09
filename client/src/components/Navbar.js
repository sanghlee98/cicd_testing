import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='/images/Logo.png' width = '40'/>
           &nbsp;KSEA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/officers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                OFFICERS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/upcoming event'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EVENTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
          <div className='buttonDeco'>
          <Button 
          className= 'btnSign'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          color="#FFF"
          >
          Log in</Button>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
