import React from 'react'
import User from './user'

function UsersList({users}) {
    console.log(users)

  return (
    <div>
        <h1>Users List page</h1> 
        {users.map(user=>
        <User user={user}/>
        )}
    </div>
  )
}

export default UsersList

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users") 
    const data = await res.json()
    return {
        props:{
            users: data
        }
    }
}