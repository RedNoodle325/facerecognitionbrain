import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import face from './face.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 25 }} style={{ height: 150, width: 150 }}>
            <div className="Tilt-inner"><img style={{paddingTop:'22px'}}alt='face' src={face}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;