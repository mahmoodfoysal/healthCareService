import React from 'react';
import './AboutUs.css';
import banner2 from '../../../images/banner-2.png';

const AboutUs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>About Us</h1>
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <img style={{width:"100%"}} src={banner2} alt="about image" />
                </div>
                <div className='col-md-6 banner-align-css'>
                    <div>
                        <h2>Making Health Facilities
                            In Emergencies</h2>
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur minus rerum cupiditate, laboriosam fugit aut. Unde maxime corrupti placeat ea eligendi, quod impedit laudantium. Voluptates nulla voluptas aliquam minima, eveniet dolorem nisi quia! Nemo eius veniam reprehenderit! Iusto dolorum amet et sequi? Ab, earum repudiandae voluptas aliquam ipsam accusantium.</p>
                            <br />
                            <button className='btn btn-primary'>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;