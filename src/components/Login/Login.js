import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let errorElement;
      if(error){
        errorElement = <div>
        <p>Error: {error?.message}</p>
      </div>
      }

      if(user){
        navigate(from, {replace: true});
      }

    const handleOnEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleOnPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-25 mx-auto mt-5 login-form'>
            <h2 className='text-dark text-center mb-3'>Please Login</h2>
            <form onSubmit={handleOnSubmit}>
                <input onBlur={handleOnEmailBlur} type="email" placeholder='Enter your email' required/>
                <input onBlur={handleOnPasswordBlur} type="password" name="password" id="password" placeholder='Enter your password' required/>
                <p className='text-danger'>{errorElement}</p>
                <input className='btn btn-success' type="submit" value="Login" />
            </form>
            <p className='text-center'>New to car genius? <Link to='/register' className='text-danger text-decoration-none'>Please Register.</Link></p>
            <button onClick={() => sendPasswordResetEmail()} className='btn btn-danger mx-auto d-block'>Reset Password</button>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;