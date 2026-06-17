import React from 'react'

const UseParams2 = ({ person }) => {
  const { id } = useParams();
  const student = person.find((p) => p.id === Number(id));
  return (
    <div>
      {student ? (
        <div>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Department: {student.department}</p>
          <p>Mark: {student.mark}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  )
}

export default UseParams2