import React from 'react'
import { useNavigate } from 'react-router-dom';

const UseNavigate1 = () => {
  const navigate = useNavigate();
  const goTouseEffect = () => {
    navigate('/useEffect');
  };
  const goTouseState = () => {
    navigate('/useState');
  };
  return (
    <div>
<button onClick={goTouseEffect}>useEffect</button>
<button onClick={goTouseState}>useState</button>
    </div>
  )
}

export default UseNavigate1