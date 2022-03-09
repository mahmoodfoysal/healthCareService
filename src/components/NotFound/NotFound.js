import React from 'react';
import errorImage from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img src={errorImage} alt="error img" />
        </div>
    );
};

export default NotFound;