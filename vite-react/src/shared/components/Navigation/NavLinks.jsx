import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Navigation/NavLinks.css'

const NavLinks = props => {
    //but all these navLinks wont show up at all times, as when a user is already logged in 
    //then the authenticate(login/signup) wont show but other navlinks will
    //and whn the user uis not logged in, MyPlaces and Addplace will not show
    //but we will look into this after some time
    return(
        <ul className='nav-links'>
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>
            <li>
                <NavLink to="/login">Authenticate</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;