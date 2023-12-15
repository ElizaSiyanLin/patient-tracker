import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (setAuth) {
      setAuth(false); 
    }

    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="profile">
        <img src="./logo192.png" alt="Doctor" className="doctor-image"/>
        <h2>Patient Tracker </h2>
      </div>


      <Link className="nav-item" to="/dashboard">Dashboard</Link>
      <Link className="nav-item" to="/summary">Summary</Link>
      <Link className="nav-item" to="/patient-list">Patient List</Link>
      <div className="nav-item" onClick={handleLogout}>Logout</div>
    </div>
  );
}

export default Navbar;
