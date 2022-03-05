import React from 'react';
import { useHistory } from 'react-router-dom';
import './SpecificService.css';


const SpecificService = (props) => {
    const { serviceType, icon } = props.service;
    // const {history} = useHistory();
    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className='text-center'>
                    <img style={{width:"75px", height:"75px"}} src={icon} className="card-img-top text-center" alt="Service Icon" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{serviceType}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificService;