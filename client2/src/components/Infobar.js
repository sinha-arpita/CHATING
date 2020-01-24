import React from 'react'
import onlineIcon from "./images/status_online.png"
import closeIcon from "./images/button_cancel.png"
import "./infobar.css"


const Infobar = ({room}) => {
    return (
        <div className="infoBar">
            <div  className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
            </div>
            <h3>"You are playing in {room}</h3>
            <div  className="rightInnerContainer">
             <a href="/" >  <img className="closeIcon" src={closeIcon} alt="close"/></a>
            </div>
        </div>
    )
}




export default Infobar
