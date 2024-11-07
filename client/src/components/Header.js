import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/transfer-rumors">Transfer Rumors</Link>
            <Link to="/login">Login/Signup</Link>
        </nav>
    );
}

export default Header;
