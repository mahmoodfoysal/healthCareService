import React, { useEffect, useState } from 'react';
import SpecificService from '../SpecificService/SpecificService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Services</h1>
            <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                    {
                        services.map(service => <SpecificService
                        key = {service.id}
                        service = {service}
                        ></SpecificService>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;