import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const destinations = [
    {
      name: "Agobilam",
      image: "/images/ahobilam.jpg",
    },
    {
      name: "Mayapur",
      image: "/images/mayapur.jpeg",
    },
    {
      name: "Virundavan",
      image: "/images/Virundavan.jpeg",
    },
    {
      name: "Puri Jaganath",
      image: "/images/puriJaganath.jpeg",
    },
  ];

  return (
    <div className="home main-content">
      <nav className="navbar">
        <h2>✈ Tulsi </h2>

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
            <Link to="/locations">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <center>
          <div className="hero-content">
            <h1>Explore The World</h1>
            <p>
              Discover breathtaking destinations and unforgettable experiences.
            </p>

            <button className="btn-primary">Start Your Journey</button>
          </div>
        </center>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>

        <div className="card-container">
          {destinations.map((place, index) => (
            <div className="card" key={index}>
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Happy Travelers</p>
        </div>

        <div>
          <h2>250+</h2>
          <p>Destinations</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Tulsi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
