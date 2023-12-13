import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling Navbar

function Navbar() {
  return (
    <div className="navbar">
      {/* Doctor's Profile, if you have this section */}
      <div className="profile">
        <img src="path_to_doctors_image" alt="Doctor" />
        <h2>Doctor's Name</h2>
      </div>

      {/* Navigation Links */}
      <Link to="/">Home</Link>
      <Link to="/summary">Summary</Link>
      <Link to="/patient-list">Patient List</Link>
      <Link to="/logout">Logout</Link>
      {/* Add more links as needed */}
    </div>
  );
}

export default Navbar;