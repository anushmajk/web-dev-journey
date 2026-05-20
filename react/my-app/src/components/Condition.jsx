import React from 'react'

const Condition = () => {
   const isLoggin = true;
  return (
    <div>
      <h1 style={{color:'red',fontSize:'30px'}}>Condition example</h1>
      <h2 style={{color:'blue'}}>{ isLoggin?"Welcome":"Please Login"}</h2>
    </div>
  )
}

export default Condition