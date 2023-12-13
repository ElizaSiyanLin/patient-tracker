import React, { useEffect, useState } from 'react';
import './PatientList.css';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/patients')
      .then(response => response.json())
      .then(data => {
        // Ensure the data is in the expected format
        setPatients(data.Patients || []); // Adjust based on the actual structure
      })
      .catch(error => {
        console.error('Error fetching patient data: ', error);
      });
  }, []);

  const filteredPatients = filter
    ? patients.filter(patient =>
        (patient.FirstName.toLowerCase() + ' ' + patient.LastName.toLowerCase()).includes(filter.toLowerCase())
      )
    : patients;

  return (
    <div className="patient-list-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search patients..."
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="patient-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.PatientID}>
              <td>{patient.PatientID}</td>
              <td>{patient.FirstName + ' ' + patient.LastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
