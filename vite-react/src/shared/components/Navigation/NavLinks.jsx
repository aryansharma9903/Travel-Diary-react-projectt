import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import '../Navigation/NavLinks.css'

const NavLinks = props => {
    const auth = useContext(AuthContext);
    //but all these navLinks wont show up at all times, as when a user is already logged in 
    //then the authenticate(login/signup) wont show but other navlinks will
    //and whn the user uis not logged in, MyPlaces and Addplace will not show
    //but we will look into this after some time
    return(
        <ul className='nav-links'>
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn && (<li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>)}
            {auth.isLoggedIn && <li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink to="/login">LOGIN / SIGNUP</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <button onClick={auth.logout}>
                    LOGOUT
                </button>
            </li>}
        </ul>
    )
};

export default NavLinks;