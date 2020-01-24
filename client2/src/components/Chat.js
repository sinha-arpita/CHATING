import React, {useState,useEffect}from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import "./chat.css"
import Infobar from './Infobar';
import Input from "./Input"
import Messages from "./Messages"

let socket;//declaring a variable outside
const Chat = ({location}) => {
    const [name,setName]=useState("")
    const [room,setRoom] =useState("")
    const [message,setMessage]=useState("")
    const[messages,setMessages]=useState([])
    const endpoint='localhost:6900'
    // const sendMessage = null

   useEffect(()=>{
    //    const data= queryString.parse(props.location.search)
    //    console.log(data)
    //    console.log(props.location.search)

    const{name,room} = queryString.parse(location.search)
    socket=io(endpoint)//we need to pass the endpoint to the server
              console.log(socket)
              setName(name)
              setRoom(room)
    socket.emit("join",{name,room},()=>{

    }) //same as{name:name,room:room} 
    //now completing the useeffect
    //when the user lefts
   
    
    return()=>{
        socket.emit('disconnect')
        socket.off()
    }       
            
   },[location.search,endpoint])
   //second useEffect for messages
   useEffect(()=>{
    //listening the message from the backend that admin is sending
    socket.on('message',(message)=>{
      setMessages([...messages,message])
    },[messages])//only when messages array changes
    
    })

    const sendMessage = (event)=>{
        //with one key press the whole page will refresh , that we don't want
        event.preventDefault()
        if(message){
            //it has same configurtion as the backend, sendmessage is from the user side and only message is from the admin side,with the  callback you are setting
            //the input message field blank again after sending the meassage
            socket.emit("sendMessage",message,()=>{
                setMessage("")
            })
        }
        
    }
    console.log(message,messages)


    return (
        <div className="outerContainer">
            <div className= "container">
               
                <Infobar room={room}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                <Messages messages={messages} name={name}/>

            </div>
            <h1> chat</h1>
        </div>
    )
}

export default Chat
