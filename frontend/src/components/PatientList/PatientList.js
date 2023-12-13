import React, { useEffect, useState } from 'react';
import './PatientList.css';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch patients from the database (mocked here)
  useEffect(() => {
    // Replace this with actual data fetching logic
    const fetchedPatients = [
      { id: 1, name: 'John Doe', condition: 'Condition A' },
      { id: 2, name: 'Jane Smith', condition: 'Condition B' },
      // ... more patients
    ];
    setPatients(fetchedPatients);
  }, []);

  // Filtered list based on filter state
  const filteredPatients = filter
    ? patients.filter(patient => 
        patient.name.toLowerCase().includes(filter.toLowerCase()) ||
        patient.condition.toLowerCase().includes(filter.toLowerCase())
      )
    : patients;

    return (
        <div>
          <input type="text" placeholder="Search patients..." onChange={(e) => setFilter(e.target.value)} />
          <ul className="patient-list">
            {filteredPatients.map(patient => (
              <li key={patient.id} className="patient-item">
                {patient.name} - {patient.condition}
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default PatientList;
