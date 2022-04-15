import React from 'react';
import google from '../../images/google.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessage;

    if(error || error1 || error2){
        errorMessage = <div>
            <p>{error?.message} {error1?.message} {error2?.message}</p>
        </div>
    }

    if(user || user1 || user2){
        navigate(from, {replace: true});
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
                <p className='px-3 mt-2'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
            </div>
            <p className='text-danger'>{errorMessage}</p>
            <button onClick={() => signInWithGoogle()} className='btn btn-success w-100 d-flex align-items-center justify-content-center my-2'>
                <img className='me-3' width={20} src={google} alt="" />
                Google Sign In
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-success w-100 d-flex align-items-center justify-content-center my-2'>
                <img className='me-3' width={30} src={github} alt="" />
                Gihub Sign In
            </button>
            <button onClick={() => signInWithFacebook()} className='btn btn-success w-100 d-flex align-items-center justify-content-center'>
                <img className='me-3' width={30} src={facebook} alt="" />
                Facebook Sign In
            </button>
        </div>
    );
};

export default SocialLogin;