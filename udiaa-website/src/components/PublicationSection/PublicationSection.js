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
        </Container>
    );
}
export default PublicationSection;