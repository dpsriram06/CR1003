import React, { useState } from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

export default function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(user) && !mobileRegex.test(user)) {
      setError("Enter a valid Email or Mobile Number");
      return;
    }

    setError("");
    // alert("Login Successful");
  };

  return (
    <div style={styles.page} className="main-content">
      <div style={styles.sideImageLeft} />
      <div style={styles.container}>
        <div style={styles.card}>
          <img src={logo} alt="Travel Logo" style={styles.logo} />
          <h2 style={styles.title}>ISKCON Vellore</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="user">
              Mobile or Email
            </label>
            <input
              id="user"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="iskcon@example.com or 9876543210"
              style={styles.input}
              required
            />
            {error && (
              <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
            )}

            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Sign in
            </button>
            <p style={styles.signupText}>
              Don't have an account?{" "}
              <Link to="/signup" style={styles.signupLink}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div style={styles.sideImageRight} />
    </div>
  );
}

const styles = {
  signupText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
  },

  signupLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
  },
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f3f6fb",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
  },
  sideImageLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "25%",
    backgroundImage:
      "url(https://via.placeholder.com/400x800.png?text=Travel+Left)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
  },
  sideImageRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "25%",
    backgroundImage:
      "url(https://via.placeholder.com/400x800.png?text=Travel+Right)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
  },
  container: {
    zIndex: 2,
    width: "100%",
    maxWidth: 420,
    padding: 20,
    boxSizing: "border-box",
  },
  card: {
    background: "white",
    borderRadius: 12,
    padding: 30,
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: "contain",
    marginBottom: 12,
  },
  title: {
    margin: "0 0 18px 0",
    color: "#1f2d3d",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: {
    textAlign: "left",
    fontSize: 12,
    color: "#4b5563",
  },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    fontSize: 14,
    outline: "none",
  },
  button: {
    marginTop: 6,
    padding: "12px 16px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
  logo: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: 15,
    fontFamily: "Orbitron, sans-serif",
    fontSize: "34px",
    color: "#2563eb",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
};
