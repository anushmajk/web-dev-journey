import React from 'react'
import Table from 'react-bootstrap/Table';
const Tabl = () => {
  const student=
      [{id:'201', Name:'Ram'},
      {id:'202', Name:'John'}]
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
        <tbody>
          {student.map((student) =>(
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.Name}</td>
          </tr>
          ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Tabl