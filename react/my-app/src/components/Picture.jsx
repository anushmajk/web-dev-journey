import React from 'react'
import myImage from "../assets/hero.png";
const Picture = () => {
  return (
    <div>
      <h1 style={{color:'red', fontSize:'30px'}}>My Image example</h1>
      <img style={{width:'100px',height:'100px'}} src={myImage} alt="My image"/>
    </div>
  )
}

export default Picture