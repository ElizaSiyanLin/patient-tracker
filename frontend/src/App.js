
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import MakeAppointment from './components/MakeAppointment/MakeAppointment';
import Navbar from './components/Navbar/Navbar';
import PatientHistory from './components/PatientHistory/PatientHistory';
import PatientList from './components/PatientList/PatientList';
import Summary from './components/Summary/Summary';


function App() {

  const [isAuthenticated, setAuth] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <div className="navbar-section">
          <Navbar setAuth={setAuth} />
        </div>
        <div className="content-section">
          <Routes>

            <Route path="/" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Dashboard />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login setAuth={setAuth} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/patient-list" element={<PatientList />} />
            <Route path="/medical_records/:patientId" element={<PatientHistory />} />
            <Route path="/make-appointment/:patientId" element={<MakeAppointment />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
