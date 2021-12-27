import React from "react"
import "./homepage.css"
import {useHistory} from "react-router-dom"
const Homepage = ({setLoginUser}) => {
    const history = useHistory()
    return (
        <div className = "homepage">
            <h1>Hello homepage</h1>
            {/* <div className = "button" onClick={() => history.push('/')}>Logout</div>          */}
            <div className = "button" onClick={() => history.push('/')}>Back</div>         
        </div>
    )
}

export default Homepage