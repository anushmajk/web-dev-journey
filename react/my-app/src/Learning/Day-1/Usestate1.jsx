import React, { useState } from 'react'

const Usestate1 = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ name: "",email:"" })
  return (
    <div>
      <h1>{count}</h1>
      <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <h1>Registration Form</h1>
      <input type='text' onChange={()=>setFormData(formData.value)}></input>
    </div>
  )
}

export default Usestate1