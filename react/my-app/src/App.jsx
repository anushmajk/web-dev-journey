import React from 'react'
import Picture from './components/Picture'
import Condition from './components/Condition'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Tabl from './components/Tabl';
import Product from './components/Product';
import prod1 from './assets/prod-1.jpg';
import prod2 from './assets/prod-2.jpg';
import prod3 from './assets/prod-3.jpg';
import prod4 from './assets/prod-4.jpg';
import Forms1 from './components/Forms1';
import Form2 from './components/Form2';
import RegistrationForm from './Practice problem/RegistrationForm';
import { Routes, Route, Link } from "react-router-dom";
import Homes from './Practice problem/Homes';
import About from "./Practice problem/About";
import Contact from "./Practice problem/Contact";
const App = () => {
  const products = [{
    id: 1, Name: 'Equlib Moistrizer', Description: 'Niacinamide Moistrizer', Image: prod1
  }, {
    id: 2, Name: 'Tirtir Cream', Description: 'Mathcha Calming Cream', Image: prod2
  }, {
    id: 3, Name: 'Innisfree cream', Description: 'Green tea seed Hyaluronic cream', Image: prod3
  }, {
    id: 4, Name: 'CosrX cleanser', Description: 'Triple Hyaluronic cleanser', Image: prod4
  }]
  return (
    <>
     {/* <Picture/>
      <Condition />
      <Home />
      <Tabl/> 
       <Product products={products } />
      <Forms1/> 
       <Form2/> 
      <RegistrationForm />
      <Product products={products } /> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <div>
            <Link
              className="btn btn-outline-light me-2"
              to="/">
              Home
            </Link>
            <Link
              className="btn btn-outline-light me-2"
              to="/about"            >
              About
            </Link>
            <Link
              className="btn btn-outline-light"
              to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
   
  )
}

export default App