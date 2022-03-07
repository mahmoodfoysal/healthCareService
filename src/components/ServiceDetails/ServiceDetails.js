import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import services from '../FakeService/fakeService.json'

const ServiceDetails = () => {
    const { id } = useParams();
    const serviceInfo = services.filter(service=> service.id == id)[0]
    
    return (
        <div className='container'>
            <div className="text-center">
                <img className="border border-blue" src={serviceInfo.img} alt={serviceInfo.serviceType} />
                <h3 className="m-3">{serviceInfo.serviceType}</h3>
                <p style={{ textAlign: 'justify' }}>{serviceInfo.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;