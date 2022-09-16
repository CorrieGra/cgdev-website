/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import './Nav.css';

export function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);

    useEffect(() => {
        if (location.pathname !== currentLocation) {
            setNavIsOpen(false);
            setCurrentLocation(location.pathname);
        }
    }, [location.pathname]);

    return (
        <nav className="nav">
            <div className="nav__logo">
                <Link to="/">
                    <img src="assets/images/logo.png" alt="" />
                </Link>
            </div>
            <div className="nav__menu">
                <ul className="nav__menu--list">
                    <li className={ location.pathname === '/' ? 'nav__menu--item active' : 'nav__menu--item' }>
                        <Link to="/">home</Link>
                    </li>
                    <li className={ location.pathname === '/portfolio' ? 'nav__menu--item active' : 'nav__menu--item' }>
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                    <li className={ location.pathname === '/contact-me' ? 'nav__menu--item active' : 'nav__menu--item' }>
                        <Link to="/contact-me">contact me</Link>
                    </li>
                </ul>
            </div>
            <div className="nav__mobile-menu">
                <div className="nav__mobile-menu--icon-wrapper">
                    <div onClick={() => setNavIsOpen(!navIsOpen)} className={ navIsOpen ? "nav__mobile-menu--icon open" : "nav__mobile-menu--icon"}></div>
                </div>
                {
                    navIsOpen ? (
                        <div className="nav__mobile-menu--list-wrapper">
                            <ul className="nav__mobile-menu--list">
                                <li className={ location.pathname === '/' ? 'nav__mobile-menu--item active' : 'nav__mobile-menu--item' }>
                                    <Link to="/">home</Link>
                                </li>
                                <li className={ location.pathname === '/portfolio' ? 'nav__mobile-menu--item active' : 'nav__mobile-menu--item' }>
                                    <Link to="/portfolio">portfolio</Link>
                                </li>
                                <li className={ location.pathname === '/contact-me' ? 'nav__mobile-menu--item active' : 'nav__mobile-menu--item' }>
                                    <Link to="/contact-me">contact me</Link>
                                </li>
                            </ul>
                        </div>
                    ) : null
                }
            </div>
        </nav>
    );
};