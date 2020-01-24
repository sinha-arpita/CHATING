import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import Message from "./Message"


const Messages = ({messages,name}) => {
    return (
        <div className="">
            {/* //need to wrap the messages in scrollToBottom */}
            <ScrollToBottom className="messages">
                {messages.map((message,index)=>{return <div key={index}> <Message message={message} name={name}/> </div>})}
            </ScrollToBottom>


            
        </div>
    )
}


export default Messages
