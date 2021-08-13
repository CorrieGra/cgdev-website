import './Nav.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
    const location = useLocation();

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
                        <Link to="portfolio">portfolio</Link>
                    </li>
                    <li className={ location.pathname === '/contact-me' ? 'nav__menu--item active' : 'nav__menu--item' }>
                        <Link to="contact-me">contact me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};