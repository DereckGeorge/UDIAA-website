import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import './ValueMission.css'
const ValueMission = () =>{ 
    return(
<>
    <div className='vision-container'>
    
    <div className='vision'>
    <div className='this-side'><FontAwesomeIcon className='icon-vision' icon={faLightbulb}  style={{color: "#00B401",}} />
    <h4 className='h-vision'>Vision</h4>
    </div>
    <div>
    <p className="p-vision">To be the leading Internal Audit student's association in advocating the Internal audit</p>
    </div>
    </div>
    
    <div className='vision'>
        <div className='this-side' ><FontAwesomeIcon className='icon-vision' icon={faBullseye} style={{color: "#00B401",}}/>
        <h4 className='h-vision'>Mission</h4>
        </div>
    <div>
    <p className="p-vision">To advocate, improve and strengthen internal audit as a career of choice among the student members through
various association activities</p>
    </div>
    </div>

    </div>
</>
    );
}
export default ValueMission;