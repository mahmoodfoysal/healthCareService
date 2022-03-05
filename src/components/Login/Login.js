import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className=''>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input placeholder='Enter Your Email' type="email" className="form-control input-width" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input placeholder='Enter Your Password' type="password" className="form-control input-width" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="Login" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <button>google</button>
        </div>
    );
};

export default Login;