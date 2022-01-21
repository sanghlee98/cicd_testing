import styled from "styled-components";
import bgImg from '../../Images/bg.png';
import React, {useState, useEffect} from 'react';
import validation from "./validation";
import Form from './Form';
import '../../App.css';
import submitForm from './Form';
import axios from 'axios';
import {useHistory} from "react-router-dom"

const initialState = {firstname:'', lastname: '', email: '', password: '', major: ""};

const SignUpForm = ({ submitForm }) => {

    const history = useHistory()

    const [values, setValues] = useState({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        major: "",
    });

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    
    const handleChange = (event) =>{

        // Set name & value using event target
        const {name, value} = event.target
                
        // Setting all values (Lastname, firstname...)
        setValues({
            ...values,            
            [name]: value            
        })                
        // console.log({values})
    };
    
    // const submit = (event) => {
    //     console.log("Submit ");
    //     event.preventDefault();
    //     const userInfo = {            
    //         lastname: values.lastname,
    //         firstname: values.firstname,
    //         email: values.email,
    //         password: values.password,
    //         major: values.major
    //     };

    //     axios({
    //         url: '/api/save',
    //         method: 'POST',
    //         data: userInfo
    //     })
    //         .then(() => {
    //             console.log('Data has been sent to the server');
    //         })
    //         .catch(() => {
    //             console.log('Internal server error');
    //         });;
    // };

    const handleFormSubmit = (event)=>{   

        console.log("handleFormSubmit ");     
        event.preventDefault();
        setErrors(validation(values));
        // setDataIsCorrect(true);        
        
        const {lastname,firstname, email, password, major} = values        
        if(lastname && firstname && email && password && major){                        
            axios.post("/api/save", values)
                .then(res => {
                    console.log(res.data)
                    alert(res.data.msg)
                    if (res.data.msg !== "User already registered"){
                        history.push('/sign-up')                
                    }
                })        
        }        
        else{
            alert("invalid input")
        }
    };

    useEffect(() =>{
        // if (Object.keys(errors).length === 0 && dataIsCorrect){
        //     // submitForm(true);
        // }

    }, [errors]);

    return (
      <div className = "sign_up_container">
          <div className = "sign_up-wrapper">
            <div>
            <h2 className = "sign-up_title">Welcome to KSEA Chapter!</h2>                
                <h2 className = "sign-up_title">Create your new account</h2>                
            </div>
            <form className="form-wrapper" >                
                <div className = "sign-up_name">
                    <label className ="sign_up_label">Last Name</label>
                    <input className = "sign_up_input" type="text" name="lastname" value={values.lastname} onChange={handleChange}/>
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                </div>
                <div className = "sign-up_name">
                    <label className ="sign_up_label">First Name</label>
                    <input className = "sign_up_input" type="text" name="firstname" value={values.firstname} onChange={handleChange}/>
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div>
                <div className = "sign-up_email">
                    <label className ="sign_up_label">Email</label>
                    <input className = "sign_up_input" type="email" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className = "sign-up_email">
                    <label className ="sign_up_label">Password</label>
                    <input className = "sign_up_input" type="password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className = "sign-up_name">
                    <label className ="sign_up_label">Major</label>
                    <input className = "sign_up_input" type="text" name="major" value={values.major} onChange={handleChange}/>
                    {errors.major && <p className="error">{errors.major}</p>}
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





export default SignUpForm
