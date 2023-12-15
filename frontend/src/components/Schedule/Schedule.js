import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Schedule.css';

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('http://127.0.0.1:5000/appointments')
      .then(response => response.json())
      .then(data => {
        console.log(data);
       
        setScheduleData(data);
      })
      .catch(error => {
        console.error('Error fetching schedule data: ', error);
      });
  }, []);
  console.log(scheduleData);

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
  {scheduleData.map((entry) => (
    <tr key={entry.AppointmentID} className={entry.Status === 'Scheduled' ? 'booked' : 'free'}>
      <td>{entry.Time}</td>
      <td>
        <Link to={`/medical_records/${entry.PatientID}`}>
          {`${entry.FirstName} ${entry.LastName}`}
        </Link>
      </td>
      <td>{entry.Status}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default Schedule;
