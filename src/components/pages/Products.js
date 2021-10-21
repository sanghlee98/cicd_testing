import React from 'react';
import '../../App.css';
import '../contact.css';
import location from '../image/location.jpg'
import call from '../image/call.png'
import email from '../image/email.png'
import ColoredLine from '../ColoredLine';
import ContactForm from '../contact-form';
import Footer from '../Footer';

export default function Products() {
  return (
    <>
      <div class="title">
        <h1>Contact US</h1>
        Want To Get In Touch? Feel Free To Say Hello!
      </div>
      <section>
        <div class="nav">
          <ul class="nav-ul">
            <li class="nav-li">
              <img src={location} alt="Location" class='Location' />
              
              <div class='info'>
                Texas A&M University<br />
                College Station, TX
              </div>
            </li>
            <div className="line">
              <ColoredLine />
            </div>
            <li class="nav-li">
              <img src={call} alt="Call" className='Call'/>
              <div className='info'>
                (000)123-3456
              </div>
            </li>
            <div className="line">
              <ColoredLine />
            </div>
            <li class="nav-li">
              <img src={email} alt="Email" className='Email'/>
              <div className='info'>
                abc00123@gmail.com
              </div>
            </li>
          </ul>
        </div>

        <div class="ask">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}