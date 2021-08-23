import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({title}) => {
    return (
        <nav className='navbar bg-success'>
            <Link to='/'>{title}</Link>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'GitHub Search'
}


export default Navbar;