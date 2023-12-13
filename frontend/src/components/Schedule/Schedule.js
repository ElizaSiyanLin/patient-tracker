import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Schedule.css';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="schedule">
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      {/* Display schedule here */}
    </div>
  );
}

export default Schedule;
