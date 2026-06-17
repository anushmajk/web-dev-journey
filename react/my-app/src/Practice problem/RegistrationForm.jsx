import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData = ((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('WELCOME!')
}
  return (
    <div>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type='text' name='name' placeholder="Full Name"value={formData.name} onChange={updateForm} />
          </div>
        <div className='input-box'>
      <input type='email' name='email'placeholder='Email Address' value={formData.email} onChange={updateForm} />
     </div>
        <div className='input-box'>
        <input type='password' name='password' placeholder='Password' value={formData.password} onChange={updateForm} />
    </div>
        <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}

export default RegistrationForm