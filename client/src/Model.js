import React, { Component } from 'react';
import axios from "axios"
import { Link, useHistory } from 'react-router-dom';

export default class Model extends Component {

    render() {

        const rsvp_link= () => {
          window.open('https://docs.google.com/forms/d/1VZGCe78UmtgvABR9fegTkmfkI701JS5dEQLs_gDoR_E/prefill')
        }
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
        return(
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.img} className="img-fluid" />
                            <h5 className="modal-text">{this.props.shortDes}</h5>
                            <p>{this.props.desc}</p>
                            <button className="btn btn-outline-danger delete-event" onClick={()=>rsvp_link()}>RSVP LINK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
