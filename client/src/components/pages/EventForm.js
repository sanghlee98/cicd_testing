import React, {useState} from "react";
import axios from "axios"
import { Link, useHistory } from 'react-router-dom';

function EventForm(){
  
  const history = useHistory();

  const [title, setTitle] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [desc, setDesc] = useState('')
  const [link, setLink] = useState('')
  const [values, setValues] = useState({
      title:"",
      shortDesc:"",
      desc:"",
      link:""
  })

  const handleTitleChange = event => {
    setTitle(event.target.value)
  };
  const handleShortDescChange = event => {
    setShortDesc(event.target.value)
  };
  const handleDescChange = event => {
    setDesc(event.target.value)
  };
  const handleLinkChange = event => {
    setLink(event.target.value)
  };

  const handleChange = e => {
      const {name, value} = e.target
      setValues({
          ...values,
          [name]: value
      })
      console.log(values)
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/event", values)

    .then(res => {
      console.log(res)
      console.log(res.data)
      if(res.data.msg === 'Event Successfully Registered.'){
        alert(res.data.msg )
        console.log(res.data)  
        
        //insert data
        
        history.push("/add-event")
      }
      else{
        console.log(res.data)        
        alert(res.data.message)
      }
    })
    .catch(err => {
      console.log(err)
    })
    // alert(`Your state values: \n 
    //         Title: ${title} \n 
    //         Short Description: ${shortDesc} \n
    //         Description: ${desc} \n
    //         Link: ${link} \n
    //         Change function Here`);

  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="title"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={values.title}
        />
      </div>
      <div>
        <label>Short Description</label>
        <input
          type="shortDesc"
          name="shortDesc"
          placeholder="Enter short description"
          onChange={handleChange}
          value={values.shortDesc}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="desc"
          name="desc"
          placeholder="Enter description"
          onChange={handleChange}
          value={values.desc}
        />
      </div>
      <div>
        <label>Link</label>
        <input
          type="link"
          name="link"
          placeholder="Enter RSVP Link"
          onChange={handleChange}
          value={values.link}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default EventForm