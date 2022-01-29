import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import HeroSection from '../HeroSection';
// import InfoSection from '../InfoSection';
// import Footer from '../Footer';

function MyProfile({user}) {
  console.log(user)
  const [values, setValues] = useState({
    lastname: user.lastname,
    email: user.email
    });
        
    const handleChange = (event) =>{

        // Set name & value using event target
        const {name, value} = event.target
                
        // Setting all values (Lastname, firstname...)
        setValues({
            ...values,            
            [name]: value            
        })                
        console.log(values)
    };
    const handleFormSubmit = (event)=>{   

        console.log("handleFormSubmit ");     
        event.preventDefault();
        // setErrors(validation(values));
        // setDataIsCorrect(true);        
        
        const {email, lastname} = values        
        if(lastname){  

            axios.post("/api/update", values)
                .then(res => {
                    console.log(res.data)
     
                })          
        }        
        else{
            alert("invalid input")
        }
    };
  return (
//     <>
//     <div className = "form_container">
//     <div className = "form_wrapper">
      
//       <div> 
//       <h2 className = "form_title">Edit Profile</h2>                
//       <h3>First Name {user.firstname}</h3>     
//       <h3>Last Name {user.lastname}</h3> 
//       <h3>Your email {user.email}</h3>
//       <h3>Major {user.major}</h3>     
//       <button>Submit</button>
//       </div>
//     </div>
// </div>
//     </>
    <div className = "form_container">
    <div className = "form_wrapper">
    <div>
    <h2 className = "sign-up_title">Welcome to KSEA Chapter!</h2>                
        <h2 className = "sign-up_title">Create your new account</h2>                
    </div>
    <form className="form-wrapper" >                
        <div className = "sign-up_name">
            <label className ="sign_up_label">Last Name</label>
            <input className = "sign_up_input" type="text" name="lastname" value={values.lastname} onChange={handleChange} />
            {/* {errors.lastname && <p className="error">{errors.lastname}</p>} */}
        </div>
  
        <div>
            <button className ="submit" onClick={handleFormSubmit}>Sign up</button>                    
            {/* <button className ="submit">Submit</button> */}
        </div>
    </form>
    </div>
    </div>
  );
}
export default MyProfile;
