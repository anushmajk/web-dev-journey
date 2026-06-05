import React, { useState } from 'react'
import * as yup from 'yup';
import "./Yup1.css";

const Yup1 = () => {
  const [formData, setFormData] = useState({username: "", email: "", password: "", repeatPassword: "" });
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    username: yup.string().min(5, "Username must be at least 5 characters").required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required").test("password-strength", "Password must contain at least one uppercase letter, one lowercase letter, and one number", (value) => {
      return /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value);
    }),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Repeat password is required"),
  });
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      alert("Form is valid!");
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 form-card">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label" >Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>
        <div className="mb-3">
          <label  className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label  className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>
        <div className="mb-3">
          <label  className="form-label">Repeat Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Repeat your password"
            value={formData.repeatPassword}
            onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
          />
          {errors.repeatPassword && <span style={{ color: "red" }}>{errors.repeatPassword}</span>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      </div>
      </div>
  )
}

export default Yup1