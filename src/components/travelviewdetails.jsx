import React, { useState } from "react";

const YourComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button */}
      <button style={styles.btn} onClick={() => setOpen(true)}>
        View Details
      </button>

      {/* Modal */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            {/* Close Button */}
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              ✕
            </button>

            {/* Scrollable Content */}
            <div style={styles.content}>
              <h2>Details</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  btn: {
    padding: "10px 18px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    width: "90%",
    maxWidth: "500px",
    background: "#fff",
    borderRadius: "10px",
    position: "relative",
    padding: "20px",
  },

  content: {
    maxHeight: "300px", // 👈 scroll area
    overflowY: "auto", // 👈 scrollbar enabled
    paddingRight: "10px",
  },

  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default YourComponent;
