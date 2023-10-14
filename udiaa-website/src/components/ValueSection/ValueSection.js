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
        <Col lg = {true} className='d-flex justify-content-center pt-3 outer-container' >
         
            <div className='image-container'>
            </div>
            <div className='paragraph-container'>
                <h4 className='paragraph'>Strong Communication</h4>
            </div>
           
        </Col>

        <Col lg = {true} className='d-flex justify-content-center pt-3'>
        <div className='image-container'>
            </div>
            <div className='paragraph-container'>
                <h4 className='paragraph'>Strong Communication</h4>
            </div>
        </Col>
    </Row>
</Container>

<Container>
    <Row>
        <Col lg = {true} className='d-flex justify-content-center pt-3 outer-container'>
        <div className='image-container'>
            </div>
            <div className='paragraph-container'>
                <h4 className='paragraph'>Strong Communication</h4>
            </div>
        </Col>

        <Col lg = {true} className='d-flex justify-content-center pt-3'>
        <div className='image-container'>
            </div>
            <div className='paragraph-container'>
                <h4 className='paragraph'>Strong Communication</h4>
            </div>
        </Col>
    </Row>
</Container>
   </>
    );
}
export default ValueSection;