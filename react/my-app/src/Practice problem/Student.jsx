// import React from 'react'
// import Card from 'react-bootstrap/Card';

// const Student = ({id,name,age,department,mark}) => {
//   return (
//     <div>
//        <Card style={{ width: '18rem' }}>
//       <Card.Body>
//           <Card.Title>Rollno:{id} Name:{name}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Age:{age}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">Department:{department}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">Mark:{mark}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">{mark >= 50 ? "pass" : "fail"}</Card.Subtitle>
//       </Card.Body>
//     </Card>
//       </div>
//   )
// }

// export default Student








import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Student = ({ person }) => {
  return (
    <>
      <Card className="text-center">
    {person.map((pers) => (
        <Card.Body  key={pers.id}>
        <Card.Title>Name: {pers.name}</Card.Title>
        <Card.Text> Age: {pers.age}</Card.Text>
        <Link to={`/student/${pers.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    ))}
    </Card>
    </>
  )
}

export default Student