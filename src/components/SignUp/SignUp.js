import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//react firebase hooks
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    //react firebase hooks
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);




    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    // if user have automatic go this route-----
    if (user) {
        navigate('/shop');
    }


    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character of longer');
            return;
        }

        //for create user
        createUserWithEmailAndPassword(email, password);

    }



    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'> Sign Up</h2>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">

                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id='' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id='' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id='' required />
                    </div>

                    <p style={{ color: "red" }}>{error}</p>

                    <input className='from-submit' type="submit" value="Sign Up" />

                </form>
                <p>
                    Already have an account? <Link className='from-link' to='/login'>Login</Link>
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

export default SignUp;