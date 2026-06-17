import React from 'react'
import { useParams } from 'react-router-dom';

const Studentdetails = ({person}) => {
  const { id } = useParams();
  const student = person.find((pers) => pers.id === Number(id));
    console.log("id =", id);
  console.log("person =", person);
  console.log(
  person.find((pers) => pers.id === Number(id))
);
  return (
    <div>
      <h1>Student Details</h1>
      {student ? (
        <ul>
          <li>Name: {student.name}</li>
          <li>Age: {student.age}</li>
        </ul>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  )
}

export default Studentdetails