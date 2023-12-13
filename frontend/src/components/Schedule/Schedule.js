// Schedule.js
import React from 'react';
import './Schedule.css'; // Make sure to create this CSS file for styling

const scheduleData = [
  { time: '8:00', patientName: 'John Doe', status: 'Booked' },
  { time: '9:00', patientName: null, status: 'Free' },
  // ... more entries ...
  { time: '20:00', patientName: 'Jane Smith', status: 'Booked' },
];

function Schedule() {
  return (
    <div className="schedule-container">
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Patient Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {scheduleData.map((entry, index) => (
          <tr key={index} className={entry.status === 'Booked' ? 'booked' : 'free'}>
            <td>{entry.time}</td>
            <td>{entry.patientName || '---'}</td>
            <td>{entry.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Schedule;
