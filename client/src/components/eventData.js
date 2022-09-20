import example from './../Images/background_contact.jpg';
import axios from "axios"
import {useState, useEffect} from 'react';
import React from 'react';
// function EventData(){
//     // const [events, setEvents] = useState({
//     //     title:"",    
//     //     shortDesc: "",
//     //     desc: ""
//     // })
//     const [events, setEvents] = useState({
//         title:"",    
//         shortDesc: "",
//         desc: ""
//     })

//     const eventData={
//         cardData:[
//         ]
//     }
    
//     axios.post("/api/find", events)
//     .then(res => {        
//         res.forEach((item, i) =>{                    
//             eventData["cardData"].push(item)
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     return(<>{eventData}</>)
// }    


const eventData={
    cardData:[
            {
            id: 1,
            imgSrc: example,
            label: 'Active',
            title: 'title 1',
            shortDes: 'This event is about....',
            desc: 'Does your gymnast want the opportunity to improve their cartwheel or round-off? Register for our cartwheel clinic to give them the chance to spend an hour and a half focused on perfecting their skills. Gymnasts can either work on the floor or on the beam.d so much more! Concessions will be available though we do ask that campers pack a snack, lunch, and water.',
            link: 'https://www.w3.org/',
            date: "2012-12-19"
        },
        {
                id: 2,
                imgSrc: example,
                label: 'Active',
                title: 'title 2',
                shortDes: 'This event is about....',
                desc: 'desc 2',
                link: '/#/',
                date: "2012-12-19"
            }
    ]
}

// const eventData = {
//         cardData:[
//             {
//                 id: 1,
//                 imgSrc: example,
//                 label: 'Active',
//                 title: 'title 1',
//                 shortDes: 'This event is about....',
//                 desc: 'Does your gymnast want the opportunity to improve their cartwheel or round-off? Register for our cartwheel clinic to give them the chance to spend an hour and a half focused on perfecting their skills. Gymnasts can either work on the floor or on the beam.d so much more! Concessions will be available though we do ask that campers pack a snack, lunch, and water.',
//                 link: 'https://www.w3.org/',
//                 date: "2012-12-19"
//             }
//             // {
//             //     id: 2,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 2',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 2',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 3,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 3',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 3',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 5,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5111',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 5111aa',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 5,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5111',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 5111aa',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 5111aa',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 5,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 5111',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 4,
//             //     imgSrc: example,
//             //     label: 'Closed',
//             //     title: 'title 4',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 4',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // },
//             // {
//             //     id: 1,
//             //     imgSrc: example,
//             //     label: 'Active',
//             //     title: 'title 5111aa',
//             //     shortDes: 'This event is about....',
//             //     desc: 'desc 5111',
//             //     link: '/#/',
//             //     date: "2012-12-19"
//             // }
//         ]
//     };

export default eventData;