import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Locations from "./components/locations";
import About from "./components/about";
import Travel from "./components/travel";
import Navbar from "./components/navbar";
import TravelViewDetails from "./components/travelviewdetails";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/travelviewdetails" element={<TravelViewDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
