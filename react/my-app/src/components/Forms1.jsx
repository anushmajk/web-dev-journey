import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
const Forms1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  //function to update
  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}! We have saved your email${formData.email}`);
  };
  return (
    
    <div>
      <h2>Sign up form</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label> Name:</label>
          <input type="text" name="name" value={formData.name} onChange={updateForm} />
        </div>
         <div>
          <label> Email:</label>
          <input type="text" name="email" value={formData.email} onChange={updateForm} />
        </div>
        <Button type="submit">Submit</Button>

      </Form>
    </div>
  );
}

export default Forms1