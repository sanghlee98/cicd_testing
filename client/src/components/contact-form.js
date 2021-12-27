import React from 'react'
// import '../App.css';
import emailjs from 'emailjs-com'

const ContactForm= () => {

    function sendEmail(e) {
        document.getElementById("msg").style.visibility='visible';
        window.alert('Message has been sent!')
        e.preventDefault();
        emailjs.sendForm('service_98dzde6', 'template_z7kywp9', e.target, "user_yH1Hs8whrIg1J8ROPmUME").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
        e.target.reset()
    }

    return (
        
        <form className="form" onSubmit={sendEmail}>
            <h1>Contact form ☎</h1>

            <label>Name</label>
            <input name="name" placeholder="name"/>

            <label>Email</label>
            <input name="email" placeholder="email"/>

            <label>Message</label>
            <textarea name="message" placeholder="message" ></textarea>


            <button  type="submit" >Submit</button>
            
            
        </form>
        
    );
}

export default ContactForm