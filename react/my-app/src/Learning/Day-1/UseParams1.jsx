import React from 'react'
import { Link } from 'react-router-dom'

const UseParams1 = ({person}) => {
  return (
    <div>
      <div>Student details</div>
      {person.map((p) => (
        <div key={p.id}>
          <p>{p.id}</p>
          <p>{p.name}</p>
          <p>{p.age}</p>
          <Link to={`/student/${p.id}`}>View details</Link>
          </div>
      ))}
    </div>
  )
}

export default UseParams1