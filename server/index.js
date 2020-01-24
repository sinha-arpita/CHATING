const express=require("express")
const socketio=require("socket.io")
const http = require ("http")// node module
const cors= require("cors")
const PORT= process.env.PORT ||6900
const app= express()//initialize the app with express
const router=require("./router")
const server=http.createServer(app)
const io=socketio(server)//instance of socketio
app.use(router)
app.use(cors())
const {addUser,removeUser,getUser,getUsersInRoom} =require("./users.js")
io.on("connection",(socket)=>{
    console.log("socket","New Connection!!!!")
    socket.on('join',({name,room},callback)=>{
        console.log(name,room)
        const {error,user}=addUser({id:socket.id,name,room})
        if (error){
            return callback(error)
        }
        socket.emit("message",{user:"admin",text:`Hello ${user.name},you are welcome to room ${user.room}`})//for the user
        socket.broadcast.to(user.room).emit("message",{user:"admin",text:`${user.name} has joined us!`})//for everybody else apart from the user
        //line no 17 and 18 we emited the event or message from backend to frontend
        socket.join(user.room)
        // now we want to know who are thge other players in the user room 
        io.to(user.room).emit("roomData",{room:user.room,users:getUsersInRoom(user.room)})
        callback()//somply pass callback without anything if no errors
    })
    //Admin generated message are called "message" while user genrerated message are called "sendMessage"
    //here we are expecting event from the frontend and emitting part will be happening on the frontend
    //we will be waiting on send message
    socket.on("sendMessage",(message,callback)=>{
       console.log("Lookup user " + socket.id) 
       const user=getUser(socket.id)
       console.log("i am user",user)
       io.to(user.room).emit("message",{user:user.name,text:message})
       //when user left the room then state should be updated with the current users in that room as getUsers InRoom will change
       io.to(user.room).emit("roomData",{room:user.room,users:getUsersInRoom(user.room)})
       callback()
    })
    socket.on("disconnect",()=>{
        console.log("user has disconnected!!!!!")
    })

})

server.listen(PORT,()=>{
    console.log(`server is running at the port ${PORT}`)
})