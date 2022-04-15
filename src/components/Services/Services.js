import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div id='services'>
            <h2 className='text-warning text-center mt-4'>Services</h2>
            <div className="services">
            {
                services.map(services => <Service
                key = {services.id}
                service = {services}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;