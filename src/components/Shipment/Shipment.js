import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone}
        console.log(shipping);
    }

    return (
        <div>
            <div className='form-container'>
           <div>
           <h2 className='form-title'>Shiping Information</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input onBlur={handleNameBlur} type="text" required />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="text" required />
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" required/>
            </div>
            <div className="input-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input onBlur={handlePhoneBlur} type="text" required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            {/* <p style={{color: 'red'}}>{hookError}</p> */}
            <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
           </div>
        </div>
        </div>
    );
};

export default Shipment;