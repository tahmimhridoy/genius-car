import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/services/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-info'>Learn More</button>
        </div>
    );
};

export default Service;