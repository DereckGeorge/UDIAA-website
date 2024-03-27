import React from 'react'; 
import Star from '../images/greenstar.png';
import './ValueSection.css'

const ValueSection = () =>{
    return(
   <>
   <div className='all-row-container'>
<div className='row-container'>
<div className='item-row'>
<div className='item'>
   <img src={Star}/>
   <p>Professionalism</p>
</div>
<div className='item'>
   <img src={Star}/>
   <p>Innovation</p>
</div>
<div className='item'>
   <img src={Star}/>
   <p>Teamwork</p>
</div>
</div>
</div>
<div className='row-container'>
<div className='item-row'>
<div className='item'>
   <img src={Star}/>
   <p>Accountability</p>
</div>
<div className='item'>
   <img src={Star}/>
   <p>Sustainability</p>
</div>
<div className='item'>
   <img src={Star}/>
   <p>Collaboration</p>
</div>
</div>
</div>
</div>
   </>
    );
}
export default ValueSection;