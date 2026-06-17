import React from 'react'
import { useLocation } from "react-router-dom";
const UseLocatae2 = () => {
  const location=useLocation();
  return (
    <div>
      <h1>My website</h1>
      {location.pathname !== "/" && location.pathname !== "/about" && (
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default UseLocatae2