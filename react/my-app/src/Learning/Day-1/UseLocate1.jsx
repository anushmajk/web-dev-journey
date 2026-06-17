import React from 'react'
 import { useLocation } from "react-router-dom";
const UseLocate1 = () => {
  const location = useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <p>{location.pathname}</p>
    </div>
  )
}

export default UseLocate1