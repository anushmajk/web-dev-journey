import { Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Homes() {

  return (
    <div className="container mt-5">
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand>College Portal</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    marginRight: "20px"
  })}>Home</NavLink>
            <NavLink to="/student" style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    marginRight: "20px"
  })}>Student</NavLink>
          </Nav>
      </Navbar>
      </div>
      <h1>Welcome to Homes Page</h1>
    </div>
  );
}

export default Homes;