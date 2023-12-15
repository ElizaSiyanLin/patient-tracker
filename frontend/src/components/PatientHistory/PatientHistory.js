
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PatientHistory.css';


function PatientHistory() {
  const { patientId } = useParams();
  const navigate = useNavigate(); 

  const [medicalRecord, setMedicalRecord] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/medical_records/patient/${patientId}`) 
      .then(response => response.json())
      .then(data => {
        setMedicalRecord(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching medical record data:', error);
        setLoading(false); 
      });
  }, [patientId]);

  if (loading) {
    return <div>Loading patient history...</div>; 
  }

  if (!medicalRecord) {
    return <div>No medical record found for this patient.</div>; 
  }

  const handleAddAppointment = () => {
    navigate(`/make-appointment/${patientId}`); 
  };
  
  return (
    <div className="patient-history-container">
      <div className="patient-history-header">
        Patient History - ID: {patientId}
      </div>
      <div className="patient-details-container">
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
