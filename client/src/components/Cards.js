import React, {useState} from 'react'
import './Cards.css';
import eventData from './eventData';
import { Link } from 'react-router-dom';
import Model from '../Model';
import axios from "axios"

function Cards(){
    
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
    const [noOfElement, setnoOfElement] = useState(8);
    const [filter, setFilter] = useState('');
    const [values, setValues] = useState({
        title:"",
    })
    const [eventList, seteventList] = useState();
    const [slic, setSlic] = useState([]);
    
    const getData = (img,title,shortDes, desc, link, date) =>{
        let tempData = [img,title,shortDes,desc,link ,date];
        setTempdata(item=>[1, ...tempData]);
        return setModel(true);
        
    };

    // let temp_event = []
    const loadMore = () => {
        
        console.log("temp")
        // axios.post("/api/find", values)        
        // .then(res => {            
        //     console.log("cards data")
            
        //     // event_list["cardData"].push(res.data)        
        //     res.data.forEach((item, i) =>{                                     
        //         temp_event.push(item)                
        //     })
        // })
        // console.log(temp_event)
        setnoOfElement(noOfElement + noOfElement); 

        
    }
    
    const searchText = (event) => {
        setFilter(event.target.value);
    }

    const load_event= (props) => {
        console.log("clicked")
        console.log({props})
        // {temp_().temp_event.map((item) => {                        
        //     console.log({item})
        //     return (<span>{item}</span>)
        // })}
    }
    
    let temp_event = []
    var review = []
    var t= []
    let temp_ = () => {    
        axios.post("/api/find", values)        
        .then(res => {            
            console.log("cards data")                         
            res.data.forEach((item, i) =>{                                     
                // console.log(item)
                temp_event.push(item)                                            
                {temp_event.map((item)=> {                  
                                      
                    review = review.concat(t);
                })}
            })
            //console.log(review)
        })  
        
        return(
            {temp_event}
        )
    };
    // let dataSearch = eventData.cardData.filter(item=>{
    //     return Object.keys(item).some(key=>
    //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    //         )
    //     });
    
    // console.log(temp_event)
    // const slice = Object.keys(temp_event).sort((a,b)=>a.label<b.label ? -1:1).slice(0,noOfElement);
    // const slice = temp_event
    // console.log(Object.keys(temp_event))
    console.log(review)
    console.log(t[0])
    console.log(temp_event  )
    const uniqueNames = Array.from(new Set(temp_event));
    console.log(uniqueNames)
    // console.log(temp_event.filter(item => {        
    //     return Object.keys(item).some(key=>                                        
    //                 item[key].toString().toLowerCase()
    //     )
    // }    
    // ))
    console.log(Object.entries(temp_event))

    console.log(temp_().temp_event)
    {temp_().temp_event.map((item) => {   
     
    })}

    return (
        <>  
            <p>output</p>
            {temp_().temp_event.map((item) => {                        
             return (<span>${item}</span>)
             })}
        </> 
    )
}

export default Cards