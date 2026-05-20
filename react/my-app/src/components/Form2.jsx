import React, { useState } from 'react'
const Form2 = () => {
  const [formData, setFormData]=useState({
    name:'',
    age:'',
    email:'',
    university:'',
    contactNumber:''
  });
  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name === '' || formData.age === '' || formData.email === '' || formData.university === '' || formData.contactNumber === ''){
      alert('Please fill all the fields');
      return;
    }
    console.log(formData);
    alert('Registration successfull!');
  };
  return (
    <div>
      <h1> Registration Form</h1>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={updateForm} />
      </div>
      <div>
        <label>Age:</label>
        <input type='number' name='age' value={formData.age} onChange={updateForm} />
      </div>
      <div>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={updateForm} />
      </div>
      <div>
        <label>University:</label>
        <input type='text' name='university' value={formData.university} onChange={updateForm} />
      </div>
      <div>
        <label>Contact Number:</label>
        <input type='number' name='contactNumber' value={formData.contactNumber} onChange={updateForm} />
      </div>
      <button type='submit' onClick={handleSubmit}>Register</button>
    </div>
  )
}

  export default Form2