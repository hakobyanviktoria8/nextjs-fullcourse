import React from 'react'

function User({user}) {
    console.log(user);
  return (
    <div key={user.id}>
        <h2>{user.id}. {user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone.split("x")[0]}</p>
        <hr/>
    </div>
  )
}

export default User