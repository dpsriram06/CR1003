import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    emailId: "",
    countryCode: "+91",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup Data:", formData);

    alert("Registration Successful");
  };

  return (
    <div className="signup-container main-content">
      <div className="signup-card">
        <h2 className="signup-title">Travel Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Country Code</label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91 India</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="login-link">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f4f6f9",
//   },
//   card: {
//     width: "400px",
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   formGroup: {
//     marginBottom: "15px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

export default Signup;
