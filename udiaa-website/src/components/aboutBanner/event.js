import React from 'react'; 
import './Banner.css';
import { Link } from 'react-router-dom';
const aboutBanner = () => {
    return(
        <section className='page-title'>
            <ul>
                <li><Link to ="/home"><h2>Home</h2></Link></li>
                <li><h2>/</h2></li>
                <li><h2>Event</h2></li>
            </ul>
      </section>
    );
}
export default aboutBanner;