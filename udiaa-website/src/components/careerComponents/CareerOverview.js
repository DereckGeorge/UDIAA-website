import React from 'react';

const CareerOverview = ({ event, expanded }) => {
  if (expanded) {
    return (
      <div className="event-overview">
        <h3>Event Overview</h3>
        <p>{event.overview}</p>
        <h3>Contact Information</h3>
        <p>Organizer: {event.organizer}</p>
        <p>Email: {event.organizerEmail}</p>
        {/* Add more contact information as needed */}
      </div>
    );
  } else {
    return null;
  }
};

export default CareerOverview;
