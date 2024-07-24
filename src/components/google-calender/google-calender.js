import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './google-calender.css';

const GoogleCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-controls">
        <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
          Google Calendar
        </a>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName="calendar-tile"
      />
    </div>
  );
};

export default GoogleCalendar;
