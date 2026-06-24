import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
// import { Row, Col ,Card, Button} from 'react-bootstrap';
const Axios1 = () => {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        <h2>Student Information</h2>
        {students && students.map((student) => (
          <div key={student.id}>
            <p>name : {student.name}</p>
            <p>email : {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Axios1

