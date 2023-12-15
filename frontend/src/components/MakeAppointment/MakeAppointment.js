
import React, { useState } from 'react';
import './MakeAppointment.css';

function MakeAppointment() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    timeSlot: ''
  });
  const [isAppointmentMade, setIsAppointmentMade] = useState(false);

  const handleConfirm = () => {
    console.log(appointmentDetails);
    setIsAppointmentMade(true);
  };

  const generateTimeSlots = () => {
    if (!appointmentDetails.date) {
      return <option value="">Please select a date first</option>;
    }

    return [
      <option value="9:00">9:00 AM</option>,
      <option value="10:00">10:00 AM</option>,
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
            disabled={!appointmentDetails.date} 
          >
            <option value="">Select a time slot</option>
            {generateTimeSlots()}
          </select>
          <button 
            className="confirm-button" 
            onClick={handleConfirm}
            disabled={!appointmentDetails.date || !appointmentDetails.timeSlot}
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
