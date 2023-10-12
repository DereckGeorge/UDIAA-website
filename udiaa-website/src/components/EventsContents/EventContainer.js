import React, { useState, useEffect } from 'react';
import './EventContainer.css';
import clock from '../images/clock.png';
import location from '../images/location.png';
import star from '../images/start.png';
import calendar from '../images/calendar.png'

const initialEvents = [
  {
    id: 1,
    name: 'Event 1',
    date: '2023-11-01',
    time: '14:00',
    location: 'Location 1',
    explanation: 'This is the explanation for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2023-11-15',
    time: '10:30',
    location: 'Location 2',
    explanation: 'This is the explanation for Event 2. Aliquam erat volutpat.',
  },
  {
    id: 1,
    name: 'Event 1',
    date: '2023-09-10',
    time: '10:30',
    location: 'Location 1',
    explanation: 'This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1v.This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1',
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2023-09-05',
    time: '10:30',
    location: 'Location 2',
    explanation: 'This is the explanation for Event 2. Aliquam erat volutpat.',
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2023-09-02',
    time: '10:30',
    location: 'Location 3',
    explanation: 'This is the explanation for Event 3. Aliquam erat volutpat.',
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2023-11-23',
    time: '10:30',
    location: 'Location 2',
    explanation: 'This is the explanation for Event 3. Aliquam erat volutpat.',
  },
  {
    id: 4,
    name: 'Event 4',
    date: '2023-11-27',
    time: '10:30',
    location: 'Location 2',
    explanation: 'This is the explanation for Event 4. Aliquam erat volutpat.',
  },
  // Add more initial events here as needed
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [currentIndexUpcoming, setCurrentIndexUpcoming] = useState(0);
  const [currentIndexPrevious, setCurrentIndexPrevious] = useState(0);
  const [activePageUpcoming, setActivePageUpcoming] = useState(1);
  const [activePagePrevious, setActivePagePrevious] = useState(1);
  const [expandedExplanations, setExpandedExplanations] = useState({});
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    explanation: '',
  });

  // State variables for search
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchTime, setSearchTime] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  // Update localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Handle search input changes
  const handleSearchInputChange = () => {
    // Implement your filtering logic here based on searchTitle, searchLocation, and searchTime
    const filtered = events.filter(event => {
      return (
        event.name.toLowerCase().includes(searchTitle.toLowerCase()) &&
        event.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        event.time.toLowerCase().includes(searchTime.toLowerCase())
      );
    });
    setFilteredEvents(filtered);
  };

  const toggleExpand = (eventId) => {
    setExpandedExplanations((prevExpandedExplanations) => ({
      ...prevExpandedExplanations,
      [eventId]: !prevExpandedExplanations[eventId],
    }));
  };

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, { ...newEvent, id: events.length + 1 }];
    setEvents(updatedEvents);
  };

  const goToPreviousUpcomingEvent = () => {
    if (currentIndexUpcoming > 0) {
      setCurrentIndexUpcoming(currentIndexUpcoming - 2);
      setActivePageUpcoming(activePageUpcoming - 1);
    }
  };

  const goToNextUpcomingEvent = () => {
    if (currentIndexUpcoming < events.length - 2) {
      setCurrentIndexUpcoming(currentIndexUpcoming + 2);
      setActivePageUpcoming(activePageUpcoming + 1);
    }
  };

  const goToPreviousPreviousEvent = () => {
    if (currentIndexPrevious > 0) {
      setCurrentIndexPrevious(currentIndexPrevious - 2);
      setActivePagePrevious(activePagePrevious - 1);
    }
  };

  const goToNextPreviousEvent = () => {
    if (currentIndexPrevious < events.length - 2) {
      setCurrentIndexPrevious(currentIndexPrevious + 2);
      setActivePagePrevious(activePagePrevious + 1);
    }
  };

  const renderEvents = (events, current, toggleExpand) => {
    return events.slice(current, current + 2).map((event) => (
      <div key={event.id} className="event-container">
        <div className="eventleft-side">
          <div className="event-info-container"> {/* Container for date, time, and location */}
              <div className="event-date">      
              <h1><img src={calendar} alt="date"/>{event.date}</h1>
              </div>
              <div>
              <p><img src={clock} alt="time"/>{event.time}</p>
              <p><img src={location} alt="time"/>{event.location}</p>
              </div>
          </div>
        </div>

          <div className="eventright-side">
            <button className="event-button"><img src={star} alt="time"/>{event.name}</button> {/* Button */}
            <h2>This is What We Do</h2>
            <p>
              Explanation: {expandedExplanations[event.id]
                ? event.explanation
                : event.explanation.substring(0, 174)}
              {event.explanation.length > 100 && (
                <span className="read-more" onClick={() => toggleExpand(event.id)}>
                  {expandedExplanations[event.id] ? 'Read Less' : 'Read More'}
                </span>
              )}
            </p>
          </div>
      </div>
    ));
  };

  const currentDate = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date + ' ' + event.time) >= currentDate
  );

  const previousEvents = events.filter(
    (event) => new Date(event.date + ' ' + event.time) < currentDate
  );

  return (
    <div className="eventcontainer">
      {/*<h1>Event Page</h1>
      <div>
        <h2>Add New Event</h2>
        <form>
          <div>
            <label>Event Name:</label>
            <input
              type="text"
              name="name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="text"
              name="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            />
          </div>
          <div>
            <label>Explanation:</label>
            <input
              type="text"
              name="explanation"
              value={newEvent.explanation}
              onChange={(e) => setNewEvent({ ...newEvent, explanation: e.target.value })}
            />
          </div>
          <button type="button" onClick={() => handleAddEvent(newEvent)}>
            Add Event
          </button>
        </form>
      </div>*/}
      <div>
        <h2>Search Events</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Event Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            value={searchTime}
            onChange={(e) => setSearchTime(e.target.value)}
          />
          <button className="event-button" onClick={handleSearchInputChange}>Search</button>
        </div>
        <h2>Upcoming Events</h2>
        <div className="event-navigation">
          {renderEvents(filteredEvents.length > 0 ? filteredEvents : upcomingEvents, currentIndexUpcoming, toggleExpand)}
        </div>
        <div className="event-navigation-controls">
          <button onClick={goToPreviousUpcomingEvent} disabled={currentIndexUpcoming === 0}>
            &lt;
          </button>
          <span className="page-number active">{activePageUpcoming}</span>
          <span className="page-number">{activePageUpcoming+1}</span>
          <button
            onClick={goToNextUpcomingEvent}
            disabled={currentIndexUpcoming >= upcomingEvents.length - 2}
          >
            &gt;
          </button>
        </div>
      </div>
      <div>
        <h2>Previous Events</h2>
        <div className="event-navigation">
          {renderEvents(previousEvents, currentIndexPrevious, toggleExpand)}
        </div>
        <div className="event-navigation-controls">
          <button onClick={goToPreviousPreviousEvent} disabled={currentIndexPrevious === 0}>
            &lt;
          </button>
          <span className="page-number active">{activePagePrevious}</span>
          <span className="page-number">{activePagePrevious+1}</span>
          <button
            onClick={goToNextPreviousEvent}
            disabled={currentIndexPrevious >= previousEvents.length - 2}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
