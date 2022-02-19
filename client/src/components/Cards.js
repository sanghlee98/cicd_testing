import React, {useState} from 'react'
import './Cards.css';
import eventData from './eventData';
import { Link } from 'react-router-dom';
import Model from '../Model';


function Cards(){
    
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
    const [noOfElement, setnoOfElement] = useState(8);
    const [filter, setFilter] = useState('');
    
    const getData = (img,title,shortDes, desc, link, date) =>{
        let tempData = [img,title,shortDes,desc,link ,date];
        setTempdata(item=>[1, ...tempData]);
        return setModel(true);
        
    };

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement); 
    }
    
    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = eventData.cardData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        });
        
    const slice = dataSearch.sort((a,b)=>a.label<b.label ? -1:1).slice(0,noOfElement);



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
                                            <div>
                                                <button><Link
                                                    to='/add-event'
                                                    className='add-event'
                                                >
                                                    Add Event
                                                </Link></button>
                                            </div>
                                        </div>


                    {slice.map((item, index)=>{
                        return(
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                                <div className="card p-0 overflow-hidden h-100 shadow">

                                    <figure className="cards__item__pic-wrap" data-category={item.label}>
                                        <img src={item.imgSrc} alt="event1" className="cards__item__img"/>
                                    </figure> 
     
                                    <div className="card-body">
                                        
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.shortDes}</p>
                                        <button className="btn btn-outline-danger" onClick={()=>getData(item.imgSrc, item.title, item.shortDes, item.desc, item.link, item.date)}>RSVP</button>
                                    </div>
                                    <li class="list-group-item">Events on {item.date}</li>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="btn btn-danger d-block w-100" onClick={()=>loadMore()}>
                    Load More
                </button>
            </section>
                {
                    model === true ? <Model img={tempdata[1]} title={tempdata[2]} shortDes={tempdata[3]} desc={tempdata[4]} link={tempdata[5]} hide={()=> setModel(false)} />: ''
                }
        </>
    )
}

export default Cards