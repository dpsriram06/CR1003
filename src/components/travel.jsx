import React, { useState } from "react";
import logo from "./images/Ahobilam1.jpg";
import { QRCodeCanvas } from "qrcode.react";

const YatraCard = () => {
  const [open, setOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const [persons, setPersons] = useState(1);

  const BOOKING_PER_PERSON = 2001;
  const BookAmount = BOOKING_PER_PERSON * persons;

  const [showQR, setShowQR] = useState(false);

  // const DynamicQR = ({ amount }) => {
  //   const upiLink = `upi://pay?pa=sriram.d6189-3@okhdfcbank&pn=AhobilamYatra&am=${amount}&cu=INR`;
  // };

  const handlePayment = () => {
    setShowQR(true);
  };

  const temples = [
    {
      id: 1,
      name: "Jwala Narasimha Swamy Temple",
      img: "Abobilam.1.jpg",
      Des: "Fierce form of Lord Narasimha Located inside a cave Most powerful shrine in Ahobilam",
    },
    {
      id: 2,
      name: "Ahobila Narasimha (Main Temple)",
      img: "Abobilam.2.jpg",
      Des: "Main temple of Ahobilam Peaceful darshan form Easily accessible",
    },
    {
      id: 3,
      name: "Malola Narasimha Swamy Temple",
      img: "Abobilam.3.jpg",
      Des: "Narasimha with Goddess Lakshmi Peaceful and divine form",
    },
    {
      id: 4,
      name: "Jwala Narasimha Swamy Temple (Evening)",
      img: "Abobilam.4.jpg",
      Des: "Boar + Narasimha combined form Located in upper hills",
    },
    {
      id: 5,
      name: "Ahobila Narasimha (Main Temple)",
      img: "Abobilam.5.jpg",
      Des: "Ancient forest shrine Associated with sage penance",
    },
    {
      id: 6,
      name: "Malola Narasimha Swamy Temple",
      img: "Abobilam.6.jpg",
      Des: "Peaceful blessing form Near waterfalls and rocks",
    },
    {
      id: 7,
      name: "Yogananda Narasimha Swamy Temple",
      img: "Abobilam.7.jpg",
      Des: "Lord in meditation posture Symbol of calmness and yoga",
    },
    {
      id: 8,
      name: "Chatravata Narasimha Swamy Temple",
      img: "Abobilam.8.jpg",
      Des: "Protected under “chatra” (umbrella) Deep forest temple",
    },
    {
      id: 9,
      name: "Pavana Narasimha Swamy Temple",
      img: "Abobilam.9.jpg",
      Des: "Located in the Nallamala forest region of Ahobilam, Andhra Pradesh About 6–10 km deep inside forest trekking route from Lower Ahobilam area Situated near the Pavana River (Bhavanashini river)",
    },
  ];

  return (
    <div className="main-content">
      <div style={styles.container}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Spiritual Yatra
        </h2>

        <center>
          <div style={styles.card}>
            {/* LEFT IMAGE */}
            <div style={styles.imageBox}>
              <img src={logo} alt="Travel Logo" style={styles.AhobilamImage} />
            </div>

            {/* MIDDLE CONTENT */}
            <div style={styles.content}>
              <h3 style={styles.title}>Ahobilam Narasimha Swamy</h3>

              <p>
                <b>Departure From:</b> Vellore <b>To</b> Ahobilam
              </p>

              <p>
                <b>Departure Date:</b> 26 February 2027 & 28 February 2027
              </p>

              <p>
                <b>Yatra Duration:</b> 3 days & 2 nights
              </p>

              <p style={{ color: "#0077cc" }}>
                * Pay ₹2,001 Per Person & Confirm Your Seat.
              </p>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div style={styles.rightBox}>
              <div style={styles.price}>₹ 13,000</div>

              <button style={styles.btn} onClick={() => setOpen(true)}>
                View Details
              </button>

              <button style={styles.btn} onClick={() => setBookOpen(true)}>
                Book Now
              </button>
              <button style={styles.btn}>Download</button>
            </div>
          </div>
        </center>
      </div>

      {/* ✅ POPUP MODAL */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              Close ✕
            </button>

            <h2>Ahobilam Details</h2>

            <div style={styles.modalContent}>
              {/* DAY 1 MORNING */}

              <div>
                {temples.map((item) => (
                  <div key={item.id} style={styles.templeCard}>
                    {/* LEFT SIDE IMAGE */}
                    <img
                      src={`../images/${item.img}`}
                      style={styles.templeImg}
                      alt={item.name}
                    />

                    {/* RIGHT SIDE CONTENT */}
                    <div style={styles.templeContent}>
                      {/* TITLE TOP LEFT */}
                      <h3 style={styles.templeTitle}>
                        {item.id}. {item.name}
                      </h3>

                      {/* DESCRIPTION */}
                      <p style={styles.templeDesc}>{item.Des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ BOOKING MODAL */}
      {bookOpen && (
        <div style={styles.overlay}>
          <div style={styles.bookingModal}>
            <button style={styles.closeBtn} onClick={() => setBookOpen(false)}>
              Close ✕
            </button>

            <h2>Book Your Yatra</h2>

            {/* 2 SEGMENT LAYOUT */}
            <div style={styles.twoCol}>
              {/* LEFT - CUSTOMER INPUT */}
              <div style={styles.leftBox}>
                <h3>Customer Details</h3>

                <input placeholder="Full Name" style={styles.input} />
                <input placeholder="Mobile Number" style={styles.input} />
                <input placeholder="Email" style={styles.input} />
                <textarea
                  placeholder="Address"
                  style={styles.textarea}
                ></textarea>
                <select
                  style={styles.input}
                  defaultValue="1"
                  onChange={(e) => setPersons(Number(e.target.value))}
                >
                  <option value="" disabled>
                    No of Persons
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6">6 Persons</option>
                </select>
              </div>

              {/* RIGHT - PACKAGE DETAILS */}
              <div style={styles.rightBoxForm}>
                <h3>Package Details</h3>

                <div style={styles.box}>
                  <p>
                    <b>Package:</b> Ahobilam Yatra
                  </p>
                  <p>
                    <b>Duration:</b> 3 Days / 2 Nights
                  </p>
                  <p>
                    <b>No of Persons:</b> {persons}
                  </p>

                  <p>
                    <b>Total Booking Amount:</b> ₹{BookAmount}
                  </p>
                </div>

                <button style={styles.payBtn} onClick={handlePayment}>
                  Book & Pay
                </button>
              </div>

              {showQR && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <h3>Scan & Pay ₹{BookAmount}</h3>

                  <QRCodeCanvas
                    value={`upi://pay?pa=sriram.d6189-3@okhdfcbank&pn=AhobilamYatra&am=${BookAmount}&cu=INR`}
                    size={200}
                  />

                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Use GPay / PhonePe / Paytm
                  </p>

                  <button
                    style={{
                      marginTop: "10px",
                      padding: "8px",
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => setShowQR(false)}
                  >
                    Close QR
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px",
    color: "#661313",
  },

  card: {
    width: "50%",
    display: "flex",
    gap: "15px",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    alignItems: "center",
    background: "#fff",
  },

  imageBox: {
    flex: "0 0 150px",
  },

  AhobilamImage: {
    width: "200px",
    height: "auto",
    borderRadius: "10px",
  },

  title: {
    fontSize: "16px",
    marginBottom: "10px",
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },

  price: {
    background: "#3b1f2b",
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  btn: {
    padding: "8px 12px",
    border: "1px solid #3b1f2b",
    background: "white",
    cursor: "pointer",
    borderRadius: "5px",
    width: "120px",
  },

  /* ✅ MODAL STYLES */
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
    background: "#fff",
    width: "90%",
    maxWidth: "1000px",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
  },

  modalContent: {
    maxHeight: "550px",
    overflowY: "auto",
    paddingRight: "10px",
    marginTop: "10px",
  },

  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "6px 10px",
    border: "none",
    background: "#3b1f2b",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },

  // templeImg: {
  //   width: "20%",
  //   height: "auto",
  //   borderRadius: "8px",
  //   marginBottom: "8px",
  // },

  templeCard: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    background: "#fff",
  },

  templeImg: {
    width: "140px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  templeContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },

  templeTitle: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    color: "#3b1f2b",
  },

  templeDesc: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.4",
  },

  bookingModal: {
    background: "#fff",
    width: "90%",
    maxWidth: "900px",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
  },

  twoCol: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  leftBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  rightBoxForm: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  input: {
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  textarea: {
    padding: "10px",
    height: "80px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  box: {
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },

  payBtn: {
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default YatraCard;
