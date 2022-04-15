import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    console.log(agree);
    // email implementation
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      let errorMessage;
      if(error){
          errorMessage = <div>
              <p>{error.message}</p>
          </div>
      }

      if(user){
          console.log(user);
      }

      const handleOnNameBlur = event => {
          setName(event.target.value);
      }

      const handleOnEmailBlur = event => {
          setEmail(event.target.value);
      }

      const handleOnPasswordBlur = event => {
          setPassword(event.target.value);
      }

      const handleOnSubmit = event => {
          event.preventDefault();
          console.log(name, email, password);
          createUserWithEmailAndPassword(email, password);
      }


    return (
        <div className='w-25 mx-auto mt-5 login-form'>
            <h2 className='text-dark text-center mb-3'>Please Register</h2>
            <form onSubmit={handleOnSubmit}>
                <input onBlur={handleOnNameBlur} type="text" name="name" id="name" placeholder='Enter your name' />
                <input onBlur={handleOnEmailBlur} type="email" placeholder='Enter your email' required/>
                <input onBlur={handleOnPasswordBlur} type="password" name="password" id="password" placeholder='Enter your password' required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ms-1 text-dark' : 'ms-1 text-danger'} htmlFor="terms">Accept Our all Terms and conditions.</label>
                <p>{errorMessage}</p>
                <input disabled={!agree} className='btn btn-success' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger text-decoration-none'>Please Login.</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;