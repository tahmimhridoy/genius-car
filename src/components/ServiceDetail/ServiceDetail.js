import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {servicesId} = useParams();
    return (
        <div>
            <h2>Service Detail is here: {servicesId}</h2>
            <div className="text-center">
            <Link to='/checkout'>
                <button className='btn btn-primary'>proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;