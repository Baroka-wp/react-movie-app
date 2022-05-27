import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;