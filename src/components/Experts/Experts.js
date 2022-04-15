import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';
import './Experts.css';

const Experts = () => {

    const experts = [
        {id: 1, name: 'Tahmim Hasan', img: expert1},
        {id: 2, name: 'Rakib Sheikh', img: expert2},
        {id: 3, name: 'Shohel Rana', img: expert3},
        {id: 4, name: 'Arifur Rahman', img: expert4},
        {id: 5, name: 'Nasib Khan', img: expert5},
        {id: 6, name: 'Abu Bokkor', img: expert6},
    ]

    return (
        <div id='experts'>
            <h2 className='text-info text-center'>Experts</h2>
            <div className="experts">
                {
                    experts.map(expert => <Expert
                    key = {expert.id} 
                    expert = {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;