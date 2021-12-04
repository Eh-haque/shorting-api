import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

const Header = () => {
    return (
            <div className='flex justify-between'>
                <div className='flex space-x-4'>
                    <img src={logo} alt="" />
                    <ul className='flex space-x-4'>
                        <Link to='/sdf'><li>Features</li></Link>
                        <Link to='/sdf'><li>Pricing</li></Link>
                        <Link to='/sdf'><li>Resources</li></Link>
                    </ul>
                </div>
                <div>
                    <ul className='flex space-x-4'>
                        <Link to='/sdf'><li>Login</li></Link>
                        <Link to='/sdf'><li>Sign Up</li></Link>
                    </ul>
                </div>
            </div>
    );
};

export default Header;