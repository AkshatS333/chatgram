const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username,room})=>{

    // clean the data
    username= username.trim().toLowerCase()
    room = room.trim().toLowerCase()


    // Validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }


    // Check for existing user
    const existingUser= users.find((user)=>{
        return user.room===room && user.username === username
    })
    // if match is found, it returns the array item back


    // Validate username
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }


    // Store user
    const user ={id, username, room}
    users.push(user)
    return {user}

}



const removeUser = (id) =>{
    const index= users.findIndex((user)=>{
        return user.id===id
    })

    if(index!==-1){
        return users.splice(index,1)[0]
    }
}


const getUser = (id) =>{
    const user = users.find((user)=>{
        return user.id === id
    })

    if(user){
        return user
    }
    return undefined
}



const getUsersInRoom= (room) =>{
    const usersGrp = users.filter((user)=>{
        return user.room===room
    })

    if(usersGrp){
        return usersGrp
    }
    return []

}


module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

const res=addUser({
    id:3,
    username: 'surya',
    room: 'mumbai'
})

console.log(res)



