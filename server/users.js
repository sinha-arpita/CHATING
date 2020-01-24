// users=[]
// const addUser=({id,name,room})=>{
//     //check that the user is unique and not there as the existing user
//      name= name.trim().toLowerCase()
//      room=room.trim().toLowerCase()
//     const existingUser=users.find(user=>user.name===name && user.room===room)
//        if (existingUser){
//            return {error:"Username has  already Taken"}
//        }
       
//         //    const id = user.id
//         //    const name=user.name
//         //    const room= user.room
//         const user= {id,name,room}//{user.id:id,user.name:name,user.room:room}
//         users.push(user)
//         return {user}
//         console.log("I am the the new user",user)

       
// }
//     const removeUser=(id)=>{
//         const index= users.find(user=>user.id===id)
//         if(index !== -1){
//             return users.splice(index,1)[0]
//         } 
//     }
//     const getUser= (id)=> {
//         console.log("Current users ", users)
//         const user= users.find(user=>{return user.id===id})
//         return user
        
//     }
//     const getUsersInRoom=(room)=>{
//         users.filter(user=>{
//             user.room===room
//         })
//     }
//     module.exports={ 
//         addUser,removeUser,getUser,getUsersInRoom
//     }
         
        
const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => {
 return users.find((user) => user.id === id)}
 

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };  
    

