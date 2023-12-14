import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import PatientList from './components/PatientList/PatientList';
import Summary from './components/Summary/Summary';
import PatientHistory from './components/PatientHistory/PatientHistory';
import MakeAppointment from './components/MakeAppointment/MakeAppointment'; // Import your MakeAppointment component

// ... other imports

function App() {
  return (
    <Router>
      <div className="app-layout">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/patient-list" element={<PatientList />} />
            {/* <Route path="/patient-list" element={<PatientList />} /> */}
            <Route path="/medical_records/:patientId" element={<PatientHistory />} />
            <Route path="/make-appointment/:patientId" element={<MakeAppointment />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
