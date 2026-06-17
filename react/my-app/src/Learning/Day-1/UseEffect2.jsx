import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
  const [user, setUser] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
  return (
    <div>
      <ul>
        {user.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect2