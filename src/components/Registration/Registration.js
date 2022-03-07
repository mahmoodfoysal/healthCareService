import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { user,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        googleSignIn } = useAuth();
    return (
        <div>
            <div className='container'>
                <div className='center'>
                    <div className=''>
                        <form onSubmit={handleRegistration}>
                            <h1 className='text-center text-success'>Please Registration</h1>

                            <div className="mb-3">
                                <label htmlFor="InputName" className="form-label">Full Name</label>
                                <input onBlur={handleNameChange} placeholder='Enter Your Full Name' type="text" className="form-control input-width" id="InputName"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleEmailChange} placeholder='Enter Your Email' type="email" className="form-control input-width" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handlePasswordChange} placeholder='Enter Your Password' type="password" className="form-control input-width" id="exampleInputPassword1" required />
                            </div>
                            {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}

                            <p><strong>If you have account?</strong> <Link to="/login">Please Login</Link></p>
                            <button type="Login" className="btn btn-primary">Registration</button>
                        </form>
                    </div>
                    <br />

                    <button onClick={googleSignIn} className='btn btn-primary'>google</button>

                </div>

            </div>
        </div>
    );
};

export default Registration;