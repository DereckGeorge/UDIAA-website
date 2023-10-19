import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PublicationSection.css'
import DownloadButton from '../Buttons/DownloadButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Publication = [
    {
        id: 1,
        name: 'Internal Auditing Symposium',
        date: '2023-11-01',
        time: '14:00',
        location: 'Nkrumah Hall, Udsm Main Campus',

    },
    {
        id: 1,
        name: 'Event 2',
        date: '2023-11-15',
        time: '10:30',
        location: 'Location 2',

    },
    {
        id: 2,
        name: 'Event 2',
        date: '2023-11-15',
        time: '10:30',
        location: 'Location 2',

    },
    {
        id: 2,
        name: 'Event 2',
        date: '2023-11-15',
        time: '10:30',
        location: 'Location 2',

    },
];
const PublicationSection = () => {

    const [events] = useState(Publication);
    const [currentIndexUpcoming, setCurrentIndexUpcoming] = useState(0);
    const [activePageUpcoming, setActivePageUpcoming] = useState(1);
    const [filteredEvents, setFilteredEvents] = useState([]);


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
            <Container className='pt-2 pb-3' >
            <div className='layout-container' key={event.id} >

                <div className='content-container'>
                    <Row className='small-content-container'>
                        <Col className='pt-2 content'>
                            <p>{event.name}</p>
                        </Col>
                        <Col className='pt-2 content'>
                            <DownloadButton />
                        </Col>
                    </Row>
                    </div>

                    <div className='content-container'>
                    <Row className='small-content-container'>
                        <Col className='pt-2 content'>
                            <p>{event.name}</p>
                        </Col>
                        <Col className='pt-2 content'>
                            <DownloadButton />
                        </Col>
                    </Row>
                    </div>
                    </div>
                    </Container>
        )
        )
        };


        const currentDate = new Date();

        const upcomingEvents = events.filter(
            (event) => new Date(event.date + ' ' + event.time) >= currentDate
        );

        const previousEvents = events.filter(
            (event) => new Date(event.date + ' ' + event.time) < currentDate
        );
    

    return (
        <>
                    <div className="event-navigation">
                    {renderEvents(filteredEvents.length > 0 ? filteredEvents : upcomingEvents, currentIndexUpcoming)}
                </div>
                <div className="event-navigation-controls">
                    <button className='outer-button'
                     onClick={goToPreviousUpcomingEvent} disabled={currentIndexUpcoming === 0}>
                    <div className='inner-left-icon'> <FontAwesomeIcon icon={faArrowLeft} /></div>
                    </button>
                    <span className="page-number active">{activePageUpcoming}</span>
                    <span className="page-number">{activePageUpcoming + 1}</span>
                    <button className='outer-button'
                        onClick={goToNextUpcomingEvent}
                        disabled={currentIndexUpcoming >= upcomingEvents.length - 1}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                        <div className='inner-right-icon'></div>
                    </button>
                </div>

        </>
    );
}
export default PublicationSection;