import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// import HeroSection from '../HeroSection';
// import InfoSection from '../InfoSection';
// import Footer from '../Footer';

function MyProfile({user}) {
  console.log(user)
  return (
    <>
    <div className = "form_container">
    <div className = "form_wrapper">
      
      <div> 
      <h2 className = "form_title">Edit Profile</h2>                
      <h3>First Name {user.firstname}</h3>     
      <h3>Last Name {user.lastname}</h3> 
      <h3>Your email {user.email}</h3>
      <h3>Major {user.major}</h3>     
      <button>Submit</button>
      </div>
    </div>
</div>
    </>
  );
}
export default MyProfile;
