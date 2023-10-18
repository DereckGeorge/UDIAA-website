import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PublicationSection.css'
import DownloadButton from '../Buttons/DownloadButton'



const PublicationSection = () => {
    return (
        <Container className='pt-2 pb-3'>
            <div className='layout-container'>
                <div className='content-container'>
                    <Row className='small-content-container'>
                        <Col className='pt-2 content'>
                            <p>UDIAA Constitution</p>
                        </Col>
                        <Col className='pt-2 content'>
                            <DownloadButton />
                        </Col>
                    </Row>
                    </div>
                    <div className='content-container'>
                    <Row className='small-content-container'>
                        <Col className='pt-2 content'>
                            <p>UDIAA Bronchure</p>
                        </Col>
                        <Col className='pt-2 content'>
                            <DownloadButton />
                        </Col>
                    </Row>
                    </div>
                    </div>

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
                
        </Container>
    );
}
export default PublicationSection;