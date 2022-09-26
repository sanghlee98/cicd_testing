import React, {useState} from 'react'
import './Cards.css';
import eventData from './eventData';
import { Link } from 'react-router-dom';
import Model from '../Model';
import axios from "axios"
import {format} from 'date-fns'
function Cards({user}){


    const initialState =
    [{_id: "",
        title:"",
        shortDesc: "",
        desc:'',
        link:'',
        date:''}]
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
    const [noOfElement, setnoOfElement] = useState(8);
    const [filter, setFilter] = useState('');
    const [values, setValues] = useState({
        _id: "",
        title:"",
        shortDesc: "",
        desc:'',
        link:'',
        date:''
    })
    const [eventList, seteventList] = useState();
    const [slic, setSlic] = useState([]);
    const [state, setState] = useState(initialState);


    const getData = (title,shortDes, desc, date) =>{
        console.log(initialState.title)
        let tempData = [title,shortDes,desc, date];
        setTempdata(item=>[1, ...tempData]);
        console.log(tempdata)
        console.log(title)
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

    }
    const deleteEvent= (_id) => {
        console.log(_id)
        axios.post("/api/delete", _id)
        .then(res => {
            console.log(res)
        })
    }

    let temp_event = []
    var review = []
    var t= []
    var id = []
    let temp_ = () => {
        axios.post("/api/find", values)
        .then(res => {
            setState(res)

        })

        return(
            {state}
        )
    };

    if(!user){
        user = false;
    }

    return (
        <>
         <section className="py-4 py-lg-5 container">

         <div className="row justify-content-center align-item-center">



                                        <label className="form-label h1">UPCOMING EVENTS </label>
                                        <div className="col-12 mb-5">
                                            <div className="mb-3 col-4 mx-auto text-center">

                                                <label className="form-label h4">Search </label>{' '}
                                                <input
                                                    type="text"
                                                    className="from-control"
                                                    value={filter}
                                                    onChange={searchText.bind(this)}
                                                />
                                            </div>

            </div>




            <div>
                {user.auth ?
                    <button><Link
                        to='/add-event'
                        className='add-event'>Add Event</Link></button>
                    :
                    <div></div>
                }
            </div>

            <div>
                {user.auth ?
                    <button onClick={()=>deleteEvent()}>Delete Event</button>
                    :
                    <div></div>
                }
            </div>

            <span>{temp_()[0]}</span>

            {state.data?.map(({_id, title, shortDesc, desc, date}) => {

            return(


                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" >
                    <div className="card p-0 overflow-hidden h-100 shadow">

                        <figure className="cards__item__pic-wrap" >
                            <img src="https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2018/10/AdobeStock_229228930-1536x1024.jpeg" alt="new" className="cards__item__img"/>
                        </figure>

                        <div className="card-body">
                            <p className="card-text" type="date" required pattern="\d{4}-\d{2}-\d{2}">Event Date: {date.slice(0,10)}</p>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{shortDesc}</p>
                            <button className="btn btn-outline-danger" onClick={()=>getData(title, shortDesc, desc, date)}>RSVP</button>
                            <div>
                                {user.auth ?
                                    <button className="btn btn-outline-danger delete-event" onClick={()=>deleteEvent(_id)}>Delete event</button> : null
                                }
                            </div>
                        </div>
                        {/* <li class="list-group-item">Events on {item.date}</li> */}
                    </div>
                </div>

            )
        })}
        </div>
            </section>

            {
                    model === true ? <Model img={"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"} title={tempdata[1]} shortDes={tempdata[2]} desc={tempdata[3]} link={tempdata[4]} hide={()=> setModel(false)} />: ''
            }
        </>
    )
}

export default Cards
