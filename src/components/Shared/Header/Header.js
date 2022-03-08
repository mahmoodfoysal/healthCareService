import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Login from '../../Login/Login';

const Header = () => {
    let {history} = useHistory();
    const {user, logOut} = useAuth()
    return (
        <div className='container'>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Health Care</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item mx-1"><strong>{user.email && 'Welcome,'} </strong>{user.displayName} </li>
                            {user.displayName ? <button className='button-background' onClick={logOut}>Log Out</button>:
                            <Link to="/login">
                            <button className='btn btn-primary'>Log in</button>
                            </Link>}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;