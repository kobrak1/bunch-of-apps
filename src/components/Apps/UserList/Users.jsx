import React, { useEffect, useState } from 'react'

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(user => setUsers(user))
    }, [])
    
  return (
    <ul>
        {users.map((user, index) => (
            <li key={index} onClick={() => setUserId(index + 1)}> {user.name} </li>
        ))}
    </ul>
  )
}

export default Users
