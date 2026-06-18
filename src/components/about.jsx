import React from "react";

function About() {
  return (
    <div className="main-content">
      <div style={styles.page}>
        {/* HERO SECTION */}
        <div style={styles.hero}>
          <h1>ISKCON Vellore Temple</h1>
          <p>International Society for Krishna Consciousness</p>
        </div>

        {/* MISSION */}
        <section style={styles.card}>
          <h2>🎯 Mission</h2>
          <p>
            The mission of ISKCON is to spread spiritual knowledge and promote
            Krishna Consciousness for peace, unity, and harmony in society
            through Bhakti Yoga.
          </p>
        </section>

        {/* FOUNDER */}
        <section style={styles.card}>
          <h2>👤 Founder Acharya</h2>
          <p>
            ISKCON was founded by His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada in 1966. He dedicated his life to spreading the teachings
            of Bhagavad Gita and Srimad Bhagavatam across the world.
          </p>
        </section>

        {/* TEMPLE DETAILS */}
        <section style={styles.card}>
          <h2>🛕 Temple Information</h2>
          <p>
            ISKCON Vellore is a peaceful devotional center where devotees
            practice chanting, meditation, and service to Lord Krishna.
          </p>
        </section>

        {/* TIMINGS */}
        <section style={styles.card}>
          <h2>⏰ Temple Timings</h2>

          <div style={styles.timeBox}>
            <h3>Morning</h3>
            <p>4:30 AM – 1:00 PM</p>
          </div>

          <div style={styles.timeBox}>
            <h3>Evening</h3>
            <p>4:00 PM – 8:30 PM</p>
          </div>
        </section>

        {/* SUNDAY PROGRAM */}
        <section style={styles.card}>
          <h2>📿 Sunday Special Program</h2>
          <p>
            Every Sunday devotees gather for spiritual activities, chanting, and
            prasadam distribution.
          </p>

          <div style={styles.highlight}>
            <h3>🕚 Time: 11:30 AM – 1:30 PM</h3>
          </div>

          <ul>
            <li>🙏 Mangal Aarti & Bhajans</li>
            <li>📖 Spiritual Discourse (Bhagavad Gita)</li>
            <li>🎶 Kirtan (Devotional Singing)</li>
            <li>🍛 Free Prasadam Distribution</li>
          </ul>
        </section>

        {/* GAUDIYA VAISHNAVISM */}
        <section style={styles.card}>
          <h2>📚 Gaudiya Vaishnavism</h2>
          <p>
            ISKCON follows Gaudiya Vaishnavism, a devotional tradition focusing
            on loving service (Bhakti) to Lord Krishna, based on ancient Vedic
            scriptures like Bhagavad Gita and Srimad Bhagavatam.
          </p>
        </section>

        {/* MOVEMENT */}
        <section style={styles.card}>
          <h2>🌍 The Movement</h2>
          <p>
            The Hare Krishna movement has grown globally with temples,
            communities, food distribution programs, and spiritual education
            centers dedicated to serving humanity.
          </p>
        </section>

        {/* GALLERY */}
        <section style={styles.card}>
          <h2>📸 Temple Gallery</h2>

          <div style={styles.gallery}>
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt="temple"
            />
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
              alt="devotees"
            />
            <img
              src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
              alt="prayer"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p>🙏 Hare Krishna | ISKCON Vellore Temple</p>
        </footer>
      </div>
    </div>
  );
}

export default About;

/* STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f5f5f5",
    padding: "20px",
  },
  hero: {
    textAlign: "center",
    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
    color: "white",
    padding: "30px",
    borderRadius: "12px",
  },
  card: {
    background: "white",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  timeBox: {
    background: "#ede7f6",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
  },
  highlight: {
    background: "#fff3e0",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  gallery: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    padding: "10px",
    color: "#555",
  },
};
