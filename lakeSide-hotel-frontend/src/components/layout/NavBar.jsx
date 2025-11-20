import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    // const [showAccount,setAccount] = useState(flase);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">
      <div className="container-fluid">

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <span className="hotel-color">lakeSide Hotel</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarScroll">

          {/* Left side nav links */}
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse-all-rooms">
                Browse all rooms
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>

          {/* Right side nav */}
          <ul className="navbar-nav d-flex">

            <li className="nav-item">
              <NavLink className="nav-link" to="/finding-booking">
                Find my booking
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;