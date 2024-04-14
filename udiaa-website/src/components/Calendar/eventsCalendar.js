import React from 'react';
import './eventsCalendar.css';

const Calendar = ({ events }) => {
  // Function to get unique event dates
  const getUniqueEventDates = () => {
    const uniqueDates = new Set();
    events.forEach(event => {
      const date = new Date(event.date);
      const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      uniqueDates.add(dateString);
    });
    return Array.from(uniqueDates);
  };

  // Function to render individual calendar day
  const renderCalendarDay = (date) => {
    const eventDates = getUniqueEventDates();
    const classNames = ['calendar-day'];
    let eventName = '';
    // Find event name(s) for the current date
    const eventsOnDate = events.filter(event => event.date === date);
    if (eventsOnDate.length > 0) {
      classNames.push('event-day');
      eventName = eventsOnDate.map(event => event.name).join(', ');
    }
    if (eventDates.includes(date)) {
      classNames.push('event-day');
    }
    // Extract only the day part from the date string
    const day = new Date(date).getDate();
    return (
      <div className={classNames.join(' ')} key={date}>
        <div className="day-number">{day}</div>
        {eventName && <div className="event-name">{eventName}</div>}
      </div>
    );
  };

  // Function to render calendar month
  const renderCalendarMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const monthName = today.toLocaleString('default', { month: 'long' }); // Get the month name
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const calendarDays = [];

    // Fill blank spaces for the first week
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`blank-${i}`} className="calendar-day empty"></div>);
    }

    // Render days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${month + 1}-${day}`;
      calendarDays.push(renderCalendarDay(dateString));
    }

    return (
      <div className="calendar">
        <div className="calendar-month-name">
          {monthName} {year}
        </div>
        <div className="calendar-grid">
          <div className="calendar-weekday">Sun</div>
          <div className="calendar-weekday">Mon</div>
          <div className="calendar-weekday">Tue</div>
          <div className="calendar-weekday">Wed</div>
          <div className="calendar-weekday">Thu</div>
          <div className="calendar-weekday">Fri</div>
          <div className="calendar-weekday">Sat</div>
        </div>
        <div className="calendar-month">{calendarDays}</div>
      </div>
    );
  };

  return renderCalendarMonth();
};

export default Calendar;
