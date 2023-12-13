import React, { useEffect, useState } from 'react';
import './PatientList.css';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Mock fetching data
    const fetchedPatients = [
      { id: 1, name: 'John Doe', condition: 'Condition A' },
      { id: 2, name: 'Jane Smith', condition: 'Condition B' },
      // ... more patients
    ];
    setPatients(fetchedPatients);
  }, []);

  const filteredPatients = filter
    ? patients.filter(patient =>
        patient.name.toLowerCase().includes(filter.toLowerCase()) ||
        patient.condition.toLowerCase().includes(filter.toLowerCase())
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
            <th>Patient Name</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
