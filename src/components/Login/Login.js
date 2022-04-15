import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'> Login</h2>

                <div className="input-group">

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className="input-group">

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>

            </div>

        </div>
    );
};

export default Login;