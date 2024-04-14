import React from 'react';

const EventOverview = ({ event, expanded }) => {
  if (expanded) {
    return (
      <div className="event-overview">
        <h3>Event Overview</h3>
        <p>{event.overview}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default EventOverview;
