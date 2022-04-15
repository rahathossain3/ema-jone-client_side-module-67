import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'> Sign Up</h2>

                <form >
                    <div className="input-group">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id='' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id='' required />
                    </div>

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