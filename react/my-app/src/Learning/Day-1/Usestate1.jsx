import React, { useState } from 'react'

const Usestate1 = () => {
  //const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", password:"", confirmPassword:''})
  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}`);
  }
  return (
    <div>
      {/* <h1>{count}</h1>
      <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div> */}
      <div className='mainContainer'>
        <div className='card'>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
        <input type='text' placeholder='NAME' name='name' value={formData.name} onChange={updateForm}></input>
          </div>
          <div>
            <input type='email' placeholder='EMAIL' name='email' value={formData.email} onChange={updateForm}></input>
          </div>
          <div>
          <input type='password' placeholder='PASSWORD' name='password' value={formData.password} onChange={updateForm}></input>
          </div>
          <div>
            <input type='password' placeholder='CONFIRM PASSWORD' name='confirmPassword'value={formData.confirmPassword} onChange={updateForm}/>
          </div>
          <div>
          <input type='checkbox' />
          <label>I agree all statements in Terms and conditions</label>
          </div>
          <button type='submit'>Sign up</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Usestate1