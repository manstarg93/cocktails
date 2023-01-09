import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <>
      <header className="navbar ">
        <div className="nav-center">
          <Link to="/">
            <img className="logo" src={logo} alt="cocktaillogo" />
          </Link>

          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>

            <NavLink to="about">About</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
