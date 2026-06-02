import React, { useState,useEffect  } from 'react'

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You have clicked ${count} times`;
  }, [count])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button> 
    </div>
  )
}

export default UseEffect1