import React from 'react'; 
import Star from '../images/greenstar.png';
import './ValueSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faLightbulb,faPeopleGroup,faListCheck,faHandshake,faLeaf} from '@fortawesome/free-solid-svg-icons'

const ValueSection = () =>{
    return(
   <>
   <div className='all-row-container'>
<div className='row-container'>
<div className='item-row'>
<div className='item'>
   <div ><FontAwesomeIcon icon={faUserTie} className='item-img'/></div>
   <p>Professionalism</p>
</div>
<div className='item'>
   <div><FontAwesomeIcon icon={faLightbulb} className='item-img'/></div>
   <p>Innovation</p>
</div>
<div className='item'>
   <div><FontAwesomeIcon icon={faPeopleGroup} className='item-img' /></div>
   <p>Teamwork</p>
</div>
</div>
</div>
<div className='row-container'>
<div className='item-row'>
<div className='item'>
   <div><FontAwesomeIcon icon={faListCheck} className='item-img'/></div>
   <p>Accountability</p>
</div>
<div className='item'>
   <div><FontAwesomeIcon icon={faLeaf} className='item-img' /></div>
   <p>Sustainability</p>
</div>
<div className='item'>
   <div><FontAwesomeIcon icon={faHandshake} className='item-img'/></div>
   <p>Collaboration</p>
</div>
</div>
</div>
</div>
   </>
    );
}
export default ValueSection;