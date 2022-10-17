import React from 'react';
import ReactDOM from "react-dom";
import '../../App.css';
import EventForm from './EventForm'

export default function Services() {
  return (
    <>
        Korean-American Scientists and Engineers
        <EventForm />
        
    </>
  )
}

const rootElement = document.getElementById("root");
if(rootElement) {
  ReactDOM.render(<Services />, rootElement);
}
