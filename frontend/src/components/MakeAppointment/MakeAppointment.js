// MakeAppointment.js
import React, { useState } from 'react';
import './MakeAppointment.css'; // Import the CSS stylesheet

function MakeAppointment() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    timeSlot: ''
  });
  const [isAppointmentMade, setIsAppointmentMade] = useState(false);

  const handleConfirm = () => {
    // Here you would handle the appointment confirmation logic
    console.log(appointmentDetails);
    // Assume success and set the state to true
    setIsAppointmentMade(true);
    // You should implement actual confirmation logic, potentially sending data to a backend server
  };

  // Function to generate time slots, it could be dynamic based on the selected date
  const generateTimeSlots = () => {
    if (!appointmentDetails.date) {
      return <option value="">Please select a date first</option>;
    }

    // Mocked time slots, these could be fetched from the server or generated based on availability
    return [
      <option value="9:00">9:00 AM</option>,
      <option value="10:00">10:00 AM</option>,
      // ...other time slots
    ];
  };

  return (
    <div className="make-appointment-container">
      <h1 className="make-appointment-title">Make Appointment</h1>
      {!isAppointmentMade ? (
        <div className="make-appointment-inputs">
          <input
            className="date-input"
            type="date"
            value={appointmentDetails.date}
            onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value, timeSlot: '' })}
          />
          <select
            className="time-slot-input"
            value={appointmentDetails.timeSlot}
            onChange={(e) => setAppointmentDetails({ ...appointmentDetails, timeSlot: e.target.value })}
            disabled={!appointmentDetails.date} // Disable if no date is selected
          >
            <option value="">Select a time slot</option>
            {generateTimeSlots()}
          </select>
          <button 
            className="confirm-button" 
            onClick={handleConfirm}
            disabled={!appointmentDetails.date || !appointmentDetails.timeSlot} // Disable if no date or time slot is selected
          >
            Confirm
          </button>
        </div>
      ) : (
        <div className="appointment-success-message">
          Appointment successfully made!
        </div>
      )}
    </div>
  );
}

export default MakeAppointment;
