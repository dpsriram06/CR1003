import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page main-content">
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

      <header
        className="bg-primary text-white d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "80px",
        }}
      >
        <h1 className="fw-bold m-0">About Us</h1>
      </header>
      <br />
      <center>
        <div className="container">
          <p className="lead">
            Welcome to our Temple Tour and Prasadam Service, dedicated to
            bringing spiritual experiences and divine blessings closer to
            devotees across Vellore, Katpadi, and nearby regions. memorable
            journey.
          </p>
        </div>
      </center>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6 mb-4">
              <img
                src="/images/About1.png"
                alt="Temple Tour"
                className="img-fluid rounded shadow-lg"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>

            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>

              <p className="text-muted">
                Our mission is to make pilgrimage travel comfortable,
                affordable, and spiritually enriching for individuals, families,
                and devotional groups. We organize temple tours to sacred
                destinations, providing well-planned travel arrangements,
                guidance, and support to ensure a peaceful and memorable
                journey.
              </p>

              <p className="text-muted">
                In addition to temple tours, we offer Prasadam delivery services
                through bus and train transport networks, helping devotees
                receive sacred prasadam from holy temples and spiritual centers
                even when they are unable to visit in person. We carefully
                coordinate the collection and delivery process to ensure that
                prasadam reaches devotees safely and respectfully.
              </p>

              <p className="text-muted">
                We are committed to serving the devotional community with
                sincerity, reliability, and devotion. Whether you are planning a
                spiritual pilgrimage, seeking temple darshan opportunities, or
                wishing to receive sacred prasadam at your location, our team is
                here to assist you.
              </p>

              <button
                className="btn btn-primary px-4 py-2"
                onClick={() =>
                  document.getElementById("more-info").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="more-info">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Our Services</h2>
            <p className="text-muted">
              Dedicated to providing spiritual journeys and divine experiences
              for devotees.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm text-center p-4 h-100"
                style={styles.serviceCard}
              >
                <div className="fs-1 mb-3">🛕</div>
                <h5 className="fw-bold">Temple Tour Packages</h5>
                <p className="text-muted mb-0">
                  Well-organized pilgrimage tours to sacred temples with
                  comfortable travel arrangements.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm text-center p-4 h-100"
                style={styles.serviceCard}
              >
                <div className="fs-1 mb-3">👨‍👩‍👧‍👦</div>
                <h5 className="fw-bold">Group & Family Tours</h5>
                <p className="text-muted mb-0">
                  Special spiritual tour packages designed for families, groups,
                  and devotees.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm text-center p-4 h-100"
                style={styles.serviceCard}
              >
                <div className="fs-1 mb-3">🎁</div>
                <h5 className="fw-bold">Prasadam Delivery</h5>
                <p className="text-muted mb-0">
                  Sacred prasadam delivery across Vellore, Katpadi, and nearby
                  regions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm text-center p-4 h-100"
                style={styles.serviceCard}
              >
                <div className="fs-1 mb-3">🙏</div>
                <h5 className="fw-bold">House Programs</h5>
                <p className="text-muted mb-0">
                  We arrange devotional house programs with Bhajans, Kirtans,
                  spiritual talks, and Prasadam distribution to create a sacred
                  and uplifting atmosphere in your home.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm text-center p-4 h-100"
                style={styles.serviceCard}
              >
                <div className="fs-1 mb-3">🎉</div>
                <h5 className="fw-bold">Festival Special Programs</h5>
                <p className="text-muted mb-0">
                  Exclusive spiritual tours and special travel arrangements
                  during festivals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Strengths</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Responsive Design</h5>
                <p>Works on all screen sizes seamlessly.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Modern UI</h5>
                <p>Clean and professional interface design.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Fast Performance</h5>
                <p>Optimized structure for speed and usability.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 Tulsi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: "10px",
  },
  image: {
    width: "75%",
  },
  card: {
    transition: "all 0.3s ease",
    border: "none",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    height: "100%",
    borderRadius: "10px",
    cursor: "pointer",
  },

  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
};

export default About;
