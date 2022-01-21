import React from "react"
import "./homepage.css"
import {useHistory} from "react-router-dom"
import axios from "axios"

const Homepage = ({user}) => {
    const history = useHistory()

    // axios.get('user', config).then(
    //     res => {
    //         console.log(res);
    //     },
    //     err => {
    //         console.log(err)
    //     }
    // )

    
    const config = [];
    console.log(user);
    // axios.get('user', config).then(
    //         res => {
    //                 console.log(res.data);                
    //         },
    //         err => {
    //             console.log('error: ', err)
    //         }
    // )

    return (
        <div className = "homepage">
            <h1>Hello homepage Where is this </h1>
            {/* <div className = "button" onClick={() => history.push('/')}>Logout</div>          */}
            <div className = "button" onClick={() => history.push('/')}>Back</div>         
        </div>
    )
}

export default Homepage