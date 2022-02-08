import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
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
  
  const logOut = (event) => {
    props.setLoginUser({});
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  console.log(props.user)
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
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/officers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Officers
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/upcoming event'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Upcoming Event
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
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
          {
            props.user ?
            // <Button buttonStyle='btn--outline' onClick={logOut}>Log Out</Button> : <Button buttonStyle='btn--outline'>Log in</Button>
            <NavItem icon= {props.user}><DropdownMenu user={props}/></NavItem> : <Button buttonStyle='btn--outline'>Log in</Button>
          }
        </div>
      </nav>
    </>
  );
}

function DropdownMenu(props) {

  // function DropdownItem(props){
        
  //   return (
  //      <Link to= "/MyProfile" className="profile-menu-item">
  //        <span className="Profile-icon-button">{props.leftIcon}</span>
  //        {props.children}    
  //     </Link>
  //   )
  // }
  
  const logOut = (event) => {
    props.user.setLoginUser({});
  };

  return (
    
    <div className="Profiledropdown">
      {/* <DropdownItem user={props}>My Profile</DropdownItem> */}
      <Link to = "/MyProfile" className="profile-menu-item">
         <span className="Profile-icon-button">{props.leftIcon}</span>
          My Profile</Link>
      <a href="#" className="profile-menu-item" onClick={logOut}>Log Out</a> 
    </div>
    
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className = "navProfile-item">       
      <button buttonStyle='btn--outline' onClick={() => setOpen(!open)}>{props.icon.firstname}</button>
      {open && props.children}
    </li>
  );
}

export default Navbar;
