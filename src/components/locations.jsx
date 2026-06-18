import React from "react";

const Location = () => {
  const address =
    "5/459, Hare Krishna Land, Srila Prabhupada Salai, Minnal Nagar, Poigai Mottur, Vellore, Tamil Nadu 632114";
  const mapSrc =
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s5/459,Hare+Krishna+Land,Srila+Prabhupada+Salai,Minnal+Nagar,Poigai+Mottur,Vellore,Tamil+Nadu+632114!6i15";
  const iframeSrc = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  return (
    <section style={styles.section}>
      <div style={styles.card} className="main-content">
        <div style={styles.info}>
          <h1 style={styles.title}>ISKCON Vellore</h1>
          <p style={styles.subtitle}>
            Modern destination for peace, devotion, and culture.
          </p>
          <div style={styles.details}>
            <div>
              <span style={styles.label}>Address</span>
              <p style={styles.text}>{address}</p>
            </div>
            <div>
              <span style={styles.label}>Open Hours</span>
              <p style={styles.text}>04:30 AM - 08:00 PM</p>
            </div>
          </div>
          <a
            href={iframeSrc}
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            View on Google Maps
          </a>
        </div>

        <div style={styles.mapWrapper}>
          <iframe
            title="Location Map"
            src={mapSrc}
            width="95%"
            height="95%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "40px 24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top, #eef4ff 0%, #f7fafc 45%, #ffffff 100%)",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "1100px",
    borderRadius: "32px",
    overflow: "hidden",
    boxShadow: "0 35px 80px rgba(43, 84, 151, 0.18)",
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: "24px",
    background: "rgba(255, 255, 255, 0.92)",
    backdropFilter: "blur(18px)",
  },
  info: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "3rem",
    lineHeight: 1.05,
    margin: 0,
    color: "#172554",
  },
  subtitle: {
    marginTop: "16px",
    marginBottom: "32px",
    color: "#475569",
    fontSize: "1.05rem",
    maxWidth: "560px",
  },
  details: {
    display: "grid",
    gap: "24px",
    marginBottom: "32px",
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  text: {
    margin: 0,
    color: "#334155",
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  button: {
    width: "fit-content",
    padding: "16px 24px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    boxShadow: "0 18px 30px rgba(37, 99, 235, 0.22)",
  },
  mapWrapper: {
    height: "100%",
    minHeight: "500px",
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
    border: 0,
    display: "block",
  },
};

export default Location;
