import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2>✈ ISKCON Vellore</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/travel">Yatra</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
