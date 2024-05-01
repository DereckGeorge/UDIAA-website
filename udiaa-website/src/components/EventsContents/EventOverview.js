import React from 'react';

const EventOverview = ({ event, expanded }) => {
  if (expanded) {
    return (
      <div className="event-overview">
        <p>{event.overview}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default EventOverview;
