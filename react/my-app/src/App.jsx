import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Student from './Practice problem/Student'
import Card from 'react-bootstrap/Card';
import Usestate1 from './Learning/Day-1/Usestate1';
import "./App.css";
import UseEffect1 from './Learning/Day-1/UseEffect1';
import Data from './Learning/Day-1/Data';
import UseNavigate1 from './Learning/Day-1/UseNavigate1';
import Yup1 from './Learning/Day-2/Yup1';
import Param1 from './Learning/Day-2/Param1';
import RegistrationForm from './Practice problem/RegistrationForm';
//Student.jsx
// const App = () => {

//   const students = [
//     { id:101, name:"Anushma", age:21, department:"EEE", mark:75 },
//     { id:102, name:"Ajishma", age:20, department:"CSE", mark:90 },
//     { id:103, name:"Aishwarya", age:22, department:"MECH", mark:58 },
//     { id:104, name:"Anushree", age:19, department:"CIVIL", mark:38 }
//   ]

//   return (
//     <div>
//        <h2>Student Information</h2>
//       {
//         students.map((student) => (
//           <Student
//             key={student.id}
//             id={student.id}
//             name={student.name}
//             age={student.age}
//             department={student.department}
//             mark={student.mark}
//           />
//         ))
//       }
//     </div>
//   )
// }

//useState.jsx
const App = () => {
  const person=[{id:101,name:"sonu",age:'21'}]
  return (
    // <Routes>
    //   <Route path="/" element={<UseNavigate1 />}></Route>
    //   <Route path="/useEffect" element={<UseEffect1 />}></Route>
    //   <Route path="/useState" element={<Usestate1 />}></Route>
      
    //   </Routes>
    <Yup1/>
    // <Routes>
    //   <Route path='/' element={<Param1 person={person} />}></Route>
    // </Routes>
    // <RegistrationForm/>
  )
}

export default App