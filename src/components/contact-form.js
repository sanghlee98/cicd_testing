import React from 'react'
import '../App.css';

const ContactForm = () => {
    return (
        
        <form className="form">
            <h1>Contact form ☎</h1>

            <label>Name</label>
            <input placeholder="name" />

            <label>Email</label>
            <input placeholder="email" />

            <label>Message</label>
            <textarea placeholder="message"></textarea>


            <button  type="submit">Submit</button>
        </form>
    );
}

export default ContactForm