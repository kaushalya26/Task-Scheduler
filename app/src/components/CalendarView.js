import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ selectedDate, onChange }) => {
  return (
    <Calendar
      onChange={onChange}
      value={selectedDate}
      className="custom-calendar"
    />
  );
};

export default CalendarView;
