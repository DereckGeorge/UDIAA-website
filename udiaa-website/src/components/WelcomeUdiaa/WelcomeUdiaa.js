import React from 'react'; 
import Container  from 'react-bootstrap/Container';
import KnowMoreButton from '../Buttons/KnowMoreButton';
import './WelcomeUdiaa.css'
const WelcomeUdiaa = () =>{
    return( 
        <div className='outside-container'>
<Container>
    <div className='inside-container'>
<p>
UDIAA is a student's led Professional Association that assembles students, academic staff 
and interested stakeholders at the University level under the common umbrella 
with the focus on helping students build their network and future careers. 
The association was inaugurated in 2023.
</p>
<p>
Our goal is to advocate Internal Audit as a career choice for students at the undergraduate 
and graduate levels and our organization provides professional development resources, networking opportunities, social events and more.
</p>
<div className='button'>
<KnowMoreButton/>
</div>
    </div>
</Container>
</div>
    );
}
export default WelcomeUdiaa;