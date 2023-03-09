import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center'>
            <img alt='facial recognition' src={imageUrl}/>
        </div>
    )
}

export default FaceRecognition;