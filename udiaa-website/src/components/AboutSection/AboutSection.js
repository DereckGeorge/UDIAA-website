import React from 'react'; 
import './AboutSection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../images/image1.jpg'

const AboutSection = () =>{
    return(
    <Container className='pt-3 pb-3'>
        <Row>
            <Col lg={true}>
            <div className='left-side pb-2'>
            <h3> We Believe in God And Everything Happens For A Reason</h3>
            </div>
            <div className='paragraph'>
                <p>Who Knows About Us Unless We Tell Them About It, Never Let Your Guard Down
                    Even When They Don't Believe In You.
                </p>
            </div>
            </Col>
            <Col lg={true}>
            <img src={Image} alt="Left Side Image" className='right-side'/>
            </Col>
        </Row>
    </Container>
    );
}
export default AboutSection;