import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";

import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";


const mainNavigation = props => {
    const[drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawer = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
    return(
        <>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        <SideDrawer show={drawerIsOpen}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">
                Your Places
                </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </>
    )
}

export default mainNavigation;