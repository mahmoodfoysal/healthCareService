import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner-1.png';

const Banner = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 banner-align-css'>
                    <div>
                    <h1>Good Health Is The Root Of All Happiness</h1>
                    <button className='btn btn-primary'>Book an Appointment</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={banner1} alt="banner" style={{width: "100%"}} />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;