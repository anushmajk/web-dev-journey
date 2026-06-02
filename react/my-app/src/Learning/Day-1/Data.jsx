import React, { useEffect, useState } from 'react'

export const Data = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}  {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
export default Data
