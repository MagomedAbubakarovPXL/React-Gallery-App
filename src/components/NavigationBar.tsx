import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Paintings Gallery</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/userinfo">User
                            Info</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavigationBar;
