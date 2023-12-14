// MakeAppointment.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MakeAppointment() {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    timeSlot: ''
  });

  const handleConfirm = () => {
    // Here you would handle the appointment confirmation logic
    console.log(appointmentDetails);
    // After confirmation, you might navigate back to the dashboard or patient history
    navigate('/dashboard');
  };

  return (
    <div className="make-appointment-container">
      <h1>Make Appointment</h1>
      <input
        type="date"
        value={appointmentDetails.date}
        onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Available Time Slots"
        value={appointmentDetails.timeSlot}
        onChange={(e) => setAppointmentDetails({ ...appointmentDetails, timeSlot: e.target.value })}
      />
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default MakeAppointment;
