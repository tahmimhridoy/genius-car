import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className='expert'>
            <img src={img} alt="" />
            <h4 className='mb-3'>{name}</h4>
            <button className='btn btn-info'>Explore Me</button>
        </div>
    );
};

export default Expert;