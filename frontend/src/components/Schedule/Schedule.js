import React, { useEffect, useState } from 'react';
import './Schedule.css'; // Make sure to create and style this CSS file

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('http://127.0.0.1:5000/appointments')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setScheduleData(data.Appointments || []); // Access the 'Appointments' key
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
        {/* <tbody>
          {scheduleData.map((entry) => (
            <tr key={entry.AppointmentID} className={entry.Status === 'Scheduled' ? 'booked' : 'free'}>
              <td>{entry.Time}</td>
              <td>{`${entry.FirstName} ${entry.LastName}`}</td>
              <td>{entry.Status}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
            {scheduleData.map((entry) => (
              <tr key={entry.AppointmentID} className={entry.Status === 'Scheduled' ? 'booked' : 'free'}>
                <td>{entry.Time}</td>
                <td>{`${entry.FirstName} ${entry.LastName}`}</td>
                <td>{entry.Status}</td>
              </tr>
            ))}
          </tbody>

      </table>
    </div>
  );
}

export default Schedule;
