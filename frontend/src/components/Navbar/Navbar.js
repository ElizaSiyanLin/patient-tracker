import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling Navbar

// Navbar.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Assuming you have a CSS file for styling Navbar

function Navbar({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would clear the authentication state
    if (setAuth) {
      setAuth(false); // If using a state management solution to handle authentication
    }
    // If using localStorage or sessionStorage, clear the token or user data
    // localStorage.removeItem('userToken');

    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="navbar">
      {/* Doctor's Profile, if you have this section */}
      <div className="profile">
        <img src="./logo192.png" alt="Doctor" className="doctor-image"/>
        <h2>Patient Tracker </h2>
      </div>

      {/* Navigation Links */}
      <Link className="nav-item" to="/dashboard">Dashboard</Link>
      <Link className="nav-item" to="/summary">Summary</Link>
      <Link className="nav-item" to="/patient-list">Patient List</Link>
      {/* Use button or div onClick for Logout to handle additional logic */}
      <div className="nav-item" onClick={handleLogout}>Logout</div>
      {/* Add more links as needed */}
    </div>
  );
}

export default Navbar;
