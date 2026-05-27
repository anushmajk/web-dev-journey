import React from 'react'
import Card from 'react-bootstrap/Card';

const Student = ({id,name,age,department,mark}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
          <Card.Title>Rollno:{id} Name:{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Age:{age}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Department:{department}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Mark:{mark}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{mark >= 50 ? "pass" : "fail"}</Card.Subtitle>
      </Card.Body>
    </Card>
      </div>
  )
}

export default Student