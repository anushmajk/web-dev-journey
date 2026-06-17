import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar1 from './Practice problem/Navbar1';
import RegistrationForm from './Practice problem/RegistrationForm';
import UseEffect2 from './Learning/Day-1/UseEffect2';
import UseLocate1 from './Learning/Day-1/UseLocate1';
import UseLocatae2 from './Learning/Day-1/UseLocatae2';
import UseParams1 from './Learning/Day-1/UseParams1';
import UseParams2 from './Learning/Day-1/UseParams2';
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
// const App = () => {
//   const person=[{id:101,name:"sonu",age:'21'}]
//   return (
//     // <Routes>
//     //   <Route path="/" element={<UseNavigate1 />}></Route>
//     //   <Route path="/useEffect" element={<UseEffect1 />}></Route>
//     //   <Route path="/useState" element={<Usestate1 />}></Route>
      
//     //   </Routes>
//     // <Yup1/>
//     // <Routes>
//     //   <Route path='/' element={<Param1 person={person} />}></Route>
//     // </Routes>
//     <Navbar1/>
//   )
// }

const App = () => {
  const person = [{ id: 101, name: "sonu", age: '21' }]
  
  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <UseEffect2/> */}
      {/* <UseLocate1/> */}
      {/* <UseLocatae2/> */}
        <Routes>
          <Route path="/" element={<UseParams1 person={person} />} />
          <Route path="/student/:id" element={<UseParams2 person={person} />} />
        </Routes>
   </div> 
  )
}

export default App