import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarPage extends Component {
   render() {
    return (
      <div className="container">
        <p></p>
          <Calendar />
      </div>
    );
  }
}

export default CalendarPage;