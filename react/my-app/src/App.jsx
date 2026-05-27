import React from 'react'
import Student from './Practice problem/Student'
import Card from 'react-bootstrap/Card';

//Student.jsx
const App = () => {

  const students = [
    { id:101, name:"Anushma", age:21, department:"EEE", mark:75 },
    { id:102, name:"Ajishma", age:20, department:"CSE", mark:90 },
    { id:103, name:"Aishwarya", age:22, department:"MECH", mark:58 },
    { id:104, name:"Anushree", age:19, department:"CIVIL", mark:38 }
  ]

  return (
    <div>
       <h2>Student Information</h2>
      {
        students.map((student) => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            department={student.department}
            mark={student.mark}
          />
        ))
      }
    </div>
  )
}

export default App