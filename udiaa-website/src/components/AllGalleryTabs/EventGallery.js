import React, { useState, useEffect } from 'react';
import clock from '../images/clock.png';
import location from '../images/location.png';
import './Eventgallery.css'
import { Container } from 'react-bootstrap';
import { Gallery } from "react-grid-gallery";


const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
     },
 ];
 

const EventsInfo = [
    {
        id: 1,
        name: 'Internal Auditing Symposium',
        date: '2023-11-01',
        time: '14:00',
        location: 'Nkrumah Hall, Udsm Main Campus',

    },
    {
        id: 2,
        name: 'Event 2',
        date: '2023-11-15',
        time: '10:30',
        location: 'Location 2',

    },
    {
        id: 1,
        name: 'Event 1',
        date: '2023-09-10',
        time: '10:30',
        location: 'Location 1',
        explanation: 'This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1v.This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1This is the explanation for Event 1',
        overview: 'This is an overview of Event 1. It provides important information about the event.',
        organizer: 'Organizer Name 1',
        organizerEmail: 'organizer1@example.com',
    },
    {
        id: 2,
        name: 'Event 2',
        date: '2023-09-05',
        time: '10:30',
        location: 'Location 2',
        explanation: 'This is the explanation for Event 2. Aliquam erat volutpat.',
        overview: 'This is an overview of Event 1. It provides important information about the event.',
        organizer: 'Organizer Name 1',
        organizerEmail: 'organizer1@example.com',
    },
    {
        id: 3,
        name: 'Event 3',
        date: '2023-09-02',
        time: '10:30',
        location: 'Location 3',
        explanation: 'This is the explanation for Event 3. Aliquam erat volutpat.',
        overview: 'This is an overview of Event 1. It provides important information about the event.',
        organizer: 'Organizer Name 1',
        organizerEmail: 'organizer1@example.com',
    },
    {
        id: 3,
        name: 'Event 3',
        date: '2023-11-23',
        time: '10:30',
        location: 'Location 2',
        explanation: 'This is the explanation for Event 3. Aliquam erat volutpat.',
        overview: 'This is an overview of Event 1. It provides important information about the event.',
        organizer: 'Organizer Name 1',
        organizerEmail: 'organizer1@example.com',
    },
    {
        id: 4,
        name: 'Event 4',
        date: '2023-11-27',
        time: '10:30',
        location: 'Location 2',
        explanation: 'This is the explanation for Event 4. Aliquam erat volutpat.',
        overview: 'This is an overview of Event 1. It provides important information about the event.',
        organizer: 'Organizer Name 1',
        organizerEmail: 'organizer1@example.com',
    },
    // Add more initial events here as needed
];

const Events = () => {
    const [events, setEvents] = useState(EventsInfo);
    const [currentIndexUpcoming, setCurrentIndexUpcoming] = useState(0);
    const [currentIndexPrevious, setCurrentIndexPrevious] = useState(0);
    const [activePageUpcoming, setActivePageUpcoming] = useState(1);
    const [activePagePrevious, setActivePagePrevious] = useState(1);
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

    const goToPreviousUpcomingEvent = () => {
        if (currentIndexUpcoming > 0) {
            setCurrentIndexUpcoming(currentIndexUpcoming - 1);
            setActivePageUpcoming(activePageUpcoming - 1);
        }
    };

    const goToNextUpcomingEvent = () => {
        if (currentIndexUpcoming < events.length - 1) {
            setCurrentIndexUpcoming(currentIndexUpcoming + 1);
            setActivePageUpcoming(activePageUpcoming + 1);
        }
    };

    const renderEvents = (events, current) => {
        return events.slice(current, current + 1).map((event) => (
            <Container>
                <div key={event.id} >
                <div className='event-head'>
                    <h3>{event.name}</h3>
                </div>
                <div className="event-header-container">
                <div className='details-container'>
                        <div><img src={location} alt="location" className='details-icon' /></div>
                        <div><p className='details'>{event.location}</p></div> 
                    </div>
                    <div className='details-container'>
                    <div><img src={clock} alt="time" className='details-icon'/></div>
                        <div><p className='details'>{event.time}</p></div>
                    </div>
                </div>
                </div>
                <Container>
                <Gallery images={images} 
               />
                </Container>
            </Container>
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
        <div className="event-container-info">

            <div>

                <div className="event-navigation">
                    {renderEvents(filteredEvents.length > 0 ? filteredEvents : upcomingEvents, currentIndexUpcoming)}
                </div>
                <div className="event-navigation-controls">
                    <button onClick={goToPreviousUpcomingEvent} disabled={currentIndexUpcoming === 0}>
                        &lt;
                    </button>
                    <span className="page-number active">{activePageUpcoming}</span>
                    <span className="page-number">{activePageUpcoming + 1}</span>
                    <button
                        onClick={goToNextUpcomingEvent}
                        disabled={currentIndexUpcoming >= upcomingEvents.length - 1}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;
