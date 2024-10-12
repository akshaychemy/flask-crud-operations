import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
