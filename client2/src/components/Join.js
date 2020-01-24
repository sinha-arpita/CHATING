import React,{useState} from 'react'
import{Link} from "react-router-dom"
import "./join.css"

const Join = props => {
    const [name,setName]=useState("")
    const [room,setRoom] =useState("")
    // const NameHandler=(event)=>{
    //     console.log(`name here: ${event.target.value}`)
    //     setName(event.target.value)
    // }
    // const RoomHandler=(event)=>{
    //     setRoom(event.target.value)
    // }
    return (
        <div className="JoinOuterContainer">
            <div className="JoinInnerContainer">
            <h1 className="heading">join</h1>
            <div><input type="text" placeholder="name" className="JoinInput" onChange={event=>{setName(event.target.value)}}/></div> 
            <div><input type="text" placeholder="room" className="JoinInput mt-20" onChange={event=>{setRoom(event.target.value)}}/></div>
              <Link onClick={event=>(!name ||!room ?event.preventDefault():null)} to={`/chat?name=${name}&room=${room}`}>
             <button className="button mt-20" type= "submit">Sign IN</button>
             </Link>

            </div>
          
        </div>
    )
}



export default Join
