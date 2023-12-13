import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import PatientList from './components/PatientList/PatientList';
import Summary from './components/Summary/Summary';
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
            <Route path="/summary" element={<Summary />} />
            <Route path="/patient-list" element={<PatientList />} />
            {/* other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
