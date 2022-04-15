import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'> Login</h2>

                <form >
                    <div className="input-group">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id='' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='' />
                    </div>
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