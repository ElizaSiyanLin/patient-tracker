// // PatientHistory.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function PatientHistory() {
//   const { patientId } = useParams();
//   const [patientData, setPatientData] = useState(null);

//   useEffect(() => {
//     // Replace with your actual API endpoint and include the patientId in the URL
//     fetch(`http://127.0.0.1:5000/medical_records/${patientId}`)
//       .then(response => response.json())
//       .then(data => {
//         setPatientData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching patient history data:', error);
//       });
//   }, [patientId]);

//   if (!patientData) {
//     return <div>Loading patient history...</div>;
//   }

//   return (
//     <div className="patient-history-container">
//       {/* Display patient history information here */}
//       <h1>{`Patient History for ${patientData.patientId}`}</h1>
//       {/* More patient history details */}
//     </div>
//   );
// }

// export default PatientHistory;
// PatientHistory2.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// //import './PatientHistory.css'; // Make sure to create this CSS file for styling

// function PatientHistory() {
//   const { patientId } = useParams();
//   const [medicalRecord, setMedicalRecord] = useState(null);

// //   useEffect(() => {
// //     fetch(`http://127.0.0.1:5000/medical_records/${patientId}`) // Adjust the endpoint as needed
// //       .then(response => response.json())
// //       .then(data => {
// //         setMedicalRecord(data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching medical record data:', error);
// //       });
// //   }, [patientId]);

// //   if (!medicalRecord) {
// //     return <div>Loading patient history...</div>;
// //   }
// useEffect(() => {
//     // Use the correct route to fetch the medical record for a specific patient by their PatientID
//     fetch(`http://127.0.0.1:5000/medical_records/patient/${patientId}`) // Adjust the endpoint as needed
//       .then(response => response.json())
//       .then(data => {
//         setMedicalRecord(data);
//       })
//       .catch(error => {
//         console.error('Error fetching medical record data:', error);
//       });
//   }, [patientId]);

//   // Format the medical record information as needed for display
//   return (
//     <div className="patient-history-container">
//       <h1>Patient History - ID: {patientId}</h1>
//       <div className="medical-record-info">
//         <p>Created By: {medicalRecord.CreatedBy}</p>
//         <p>Created At: {medicalRecord.CreatedAt}</p>
//         <p>Diabetes: {medicalRecord.Diabetes ? 'Yes' : 'No'}</p>
//         <p>High Blood Pressure: {medicalRecord.HighBP ? 'Yes' : 'No'}</p>
//         {/* Add more medical details as required */}
//       </div>
//     </div>
//   );
// }

// export default PatientHistory;

// PatientHistory.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PatientHistory.css'; // Make sure to create and style this CSS file

function PatientHistory() {
  const { patientId } = useParams();
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

  // Now we can safely access the properties of medicalRecord
//   return (
//     <div className="patient-history-container">
//       <h1>Patient History - ID: {patientId}</h1>
//       <div className="medical-record-info">
//         <p>Created By: {medicalRecord.CreatedBy}</p>
//         <p>Created At: {medicalRecord.CreatedAt}</p>
//         <p>Diabetes: {medicalRecord.Diabetes ? 'Yes' : 'No'}</p>
//         <p>High Blood Pressure: {medicalRecord.HighBP ? 'Yes' : 'No'}</p>
//         {/* Add more medical details as required */}
//       </div>
//     </div>
//   );
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
          <button>Add appointment</button>
        </div>
      </div>
    </div>
  );
}

export default PatientHistory;
