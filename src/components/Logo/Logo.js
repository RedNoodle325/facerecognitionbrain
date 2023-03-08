import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 25 }} style={{height: 250, width: 250 }}>
                <img alt='RedNoodles' src='https://cdn.loveandlemons.com/wp-content/uploads/2020/07/IMG_29242.jpg'></img>
            </Tilt>
        </div>
    );
}

export default Logo;