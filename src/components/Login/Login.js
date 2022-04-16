import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // for get old user
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlue = event => {
        setPassword(event.target.value);
    }


    // if user is available 
    if (user) {
        navigate("/shop");
    }



    //handle for old user
    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)

    }



    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'> Login</h2>

                <form onSubmit={handleUserSignIn} >
                    <div className="input-group">

                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id='' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlue} type="password" name="password" id='' required />
                    </div>

                    <p style={{ color: 'red' }} >{error?.message}</p>

                    {/* jodi loading hoy taile dekhabe-------------------- */}
                    {
                        loading && <p>Loading...</p>
                    }


                    <input className='from-submit' type="submit" value="Login" />

                </form>
                <p>
                    New to Ema-John? <Link className='from-link' to='/signup'>Create an account</Link>
                </p>

                {/* own work --------- */}

                <div className='from-line'>
                    <div className='hr-line'></div>
                    <p>or</p>
                    <div className='hr-line'></div>
                </div>

                <button className='sign-in-google'>Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;