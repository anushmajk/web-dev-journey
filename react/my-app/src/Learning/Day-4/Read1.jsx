import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Row, Col ,Card, Button} from 'react-bootstrap';

const Read1 = () => {
  const [students, setStudents] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then((response) => setStudents(response.data))
      .catch((error) => console.log(error));
    setFadeIn(true);
  }, []);
  const deleteStudent = async (id) => {
    try {     
      await axios.delete(`http://localhost:4000/posts/${id}`);
      alert('Post deleted successfully');
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div> 
      <Row className={`mb-4 ${fadeIn ? 'fade-in' : ''}`}>
      {students.map((student) => (
        <Col key={student.id} md={4} className={`mb-4 ${fadeIn ? 'fade-in' : ''}`}>
          <Card>
            <Card.Body>
              <Card.Title>{student.title}</Card.Title>
              <Card.Text>{student.author}</Card.Text>
              <Button variant="danger" onClick={() => deleteStudent(student.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </div>
  )
}
export default Read1