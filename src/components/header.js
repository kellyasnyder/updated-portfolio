import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <h1 className="header__h1">Kelly Snyder</h1>
                <h2 className="header__details">Front End Developer</h2>
            </div>
            <nav className="header__details">
                <ul className="header__ul">
                    <li className="header__li"><NavLink to="/">Work</NavLink></li>
                    <li className="header__li"><NavLink to="/about">About</NavLink></li>
                    <li className="header__li"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Header);