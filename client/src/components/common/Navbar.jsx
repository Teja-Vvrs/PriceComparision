import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add custom styles here

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">PriceCompare</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/compare">Compare</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;