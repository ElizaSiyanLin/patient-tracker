

// PatientHistory.js
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PatientHistory.css'; // Make sure to create and style this CSS file


function PatientHistory() {
  const { patientId } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const [medicalRecord, setMedicalRecord] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/medical_records/patient/${patientId}`) // Make sure this endpoint is correct
      .then(response => response.json())
      .then(data => {
        setMedicalRecord(data);
        setLoading(false); // Set loading to false once data is received
      })
      .catch(error => {
        console.error('Error fetching medical record data:', error);
        setLoading(false); // Also set loading to false in case of error
      });
  }, [patientId]);

  if (loading) {
    return <div>Loading patient history...</div>; // Display loading state while fetching
  }

  if (!medicalRecord) {
    return <div>No medical record found for this patient.</div>; // Handle case where no record is found
  }

  const handleAddAppointment = () => {
    navigate(`/make-appointment/${patientId}`); // Navigate to the Make Appointment page
  };
  
  return (
    <div className="patient-history-container">
      <div className="patient-history-header">
        Patient History - ID: {patientId}
      </div>
      <div className="patient-details-container">
        {/* Replace 'detail' with actual data */}
        <div className="detail-card">Created By: {medicalRecord.CreatedBy} </div>
        <div className="detail-card">Created At: {medicalRecord.CreatedAt}</div>
        <div className="detail-card">Diabetes: {medicalRecord.Diabetes ? 'Yes' : 'No'}</div>
        <div className="detail-card">High Blood Pressure: {medicalRecord.HighBP ? 'Yes' : 'No'}</div>

      </div>
      <div className="doctors-note-section">
        <textarea placeholder="Enter/Update doctor's note"></textarea>
        <div className="button-container">
          <button>Update</button>
          <button onClick={handleAddAppointment}>Add appointment</button>
        </div>
      </div>
    </div>
  );

  

}

export default PatientHistory;
