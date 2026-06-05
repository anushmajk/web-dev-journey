import React from 'react'
import { Link } from 'react-router-dom'

const Param1 = ({person}) => {
  return (
    <div>
      <div> Student Details</div>
      {person.map((p) => (
        <div key={person.id}>
          <p>{p.id}</p>
          <p>{p.name}</p>
          <Link to={'/student/${p.id}'}>View details</Link>
      </div>        
      ))}
    </div>
  )
}

export default Param1