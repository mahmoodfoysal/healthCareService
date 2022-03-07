import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

import './Login.css';
const Login = () => {
    const {user,
        setUser,
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        googleSignIn} = useAuth();

        

        const location = useLocation();
        const history = useHistory()
        const redirect_uri = location.state?.from || '/home'

        const handleGoogleLogin = () => {
            googleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);
            })
        }
        const handleCustomLogin = (e) => {
            e.preventDefault();
            handleLogin()
            .then(result => {
                history.push(redirect_uri);
                const user = result.user;
                setUser(user);
            })
        }
    return (
        <div className='container'>
            <div className='center'>
            <div className=''>
                <form onSubmit={handleCustomLogin}>
                    <h1 className='text-center text-success'>Please Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} placeholder='Enter Your Email' type="email" className="form-control input-width" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} placeholder='Enter Your Password' type="password" className="form-control input-width" id="exampleInputPassword1" required/>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <p><strong>If you have not account?</strong> <Link to="/registration">Create New Account</Link></p>
                    <button type="Login" className="btn btn-primary">Sign In</button>
                </form>
            </div>
            <br />
            
            <button onClick={handleGoogleLogin} className='btn btn-primary'>google</button>
            
            </div>
            
        </div>
    );
};

export default Login;