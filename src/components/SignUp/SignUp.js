import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleComfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmpassword){
            setError('Your two password did not match');
            return;
        }
        if(password.length < 6){
            setError('password must be 6 characters or longer');
            return
        }
        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={handleComfirmPasswordBlur} type="password" required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            {/* <p style={{color: 'red'}}>{hookError}</p> */}
            <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an accouont? <Link className='form-link' to='/login'>Login</Link></p>
            <div className='line'>
            <hr />
            or
            <hr />
            </div>
            <input className='form-submit last' type="submit" value="Google Sign Up" />
           </div>
        </div>
    );
};

export default SignUp;