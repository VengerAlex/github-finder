import React from 'react';

const Navbar = ({title}) => {
    return (
        <nav className='navbar bg-success'>
            {title}
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'GitHub Search'
}


export default Navbar;