import React from 'react'
import User from './Learning/Day-1/User'

const App = () => {
  return (
    <div>
      {/* <User name="Anushma " age={21}/> */}
      <Student id={1} name="Anushma" age={21} />
      <Student id={2} name="Ajishma" age={20} />
    </div>
  )
}

export default App