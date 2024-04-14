import React, { useState, useEffect } from 'react';
import './EventContainer.css';
import clock from '../images/clock.png';
import location from '../images/location.png';
import star from '../images/greenstar.png';
import calendar from '../images/calendar.png'
import whiteStar from '../images/start.png'
import EventOverview from './EventOverview';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.udiaa.or.tz/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);
 
  const [currentIndexUpcoming, setCurrentIndexUpcoming] = useState(0);
  const [currentIndexPrevious, setCurrentIndexPrevious] = useState(0);
  const [activePageUpcoming, setActivePageUpcoming] = useState(1);
  const [activePagePrevious, setActivePagePrevious] = useState(1);
  const [expandedExplanations, setExpandedExplanations] = useState({});
 
  // State variables for search
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchTime, setSearchTime] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

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
            <button className="event-button"><img src={whiteStar} alt="time"/>{event.name}</button> {/* Button */}
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
            <div>
             <EventOverview event={event} expanded={expandedExplanations[event.id]} />
            </div>
          </div>
          
      </div>
    ));
  };

  const currentDate = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= currentDate
  );

  const previousEvents = events.filter(
    (event) => new Date(event.date) < currentDate
  );

  return (
    <div className="eventcontainer">
      <div>
        <div>
          <h2>Search Events</h2>
          <div className="search-container">

            <div className="input-container">
              <img src={star} alt="Event Title" />
              <input
                type="text"
                placeholder="Event Title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>
            
            <div className="input-container">
              <img src={location} alt="Location" />
              <input
                type="text"
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            
            <div className="input-container">
              <img src={clock} alt="Time" />
              <input
                type="text"
                placeholder="Time"
                value={searchTime}
                onChange={(e) => setSearchTime(e.target.value)}
              />
            </div>

            <button className="event-button" onClick={handleSearchInputChange}>
              Search
            </button>
          </div>
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
