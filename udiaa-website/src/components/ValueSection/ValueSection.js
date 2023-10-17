import React from 'react'; 
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import './ValueSection.css'
const ValueSection = () =>{
    return(
   <>
<Container>
    <Row>
        <Col md = {true} className='d-flex justify-content-center pt-3 outer-container' >
         
        <div className='outer-image-container'>
        <div className='image-container'>
        </div>
        </div>
            <div className='paragraph-container'>
                <h5>Strong Communication</h5>
            </div>
           
        </Col>

        <Col md = {true} className='d-flex justify-content-center pt-3'>
        <div className='outer-image-container'>
        <div className='image-container'>
        </div>
        </div>
            <div className='paragraph-container'>
            <h5>Strong Communication</h5>
            </div>
        </Col>
    </Row>
</Container>

<Container>
    <Row>
        <Col md = {true} className='d-flex justify-content-center pt-3 outer-container'>
        <div className='outer-image-container'>
        <div className='image-container'>
        </div>
        </div>
        
            <div className='paragraph-container'>
            <h5>Strong Communication</h5>
            </div>
        </Col>

        <Col md = {true} className='d-flex justify-content-center pt-3'>
        <div className='outer-image-container'>
        <div className='image-container'>
        </div>
        </div>
            <div className='paragraph-container'>
            <h5>Strong Communication</h5>
            </div>
        </Col>
    </Row>
</Container>
   </>
    );
}
export default ValueSection;