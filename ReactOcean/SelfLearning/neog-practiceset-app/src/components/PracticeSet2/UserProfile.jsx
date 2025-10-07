import React from 'react'

const UserProfile = ({user}) => {
  return (
    <h3>{user.name} is {user.age} years old has email id of {user.email}</h3>
  )
}

export default UserProfile