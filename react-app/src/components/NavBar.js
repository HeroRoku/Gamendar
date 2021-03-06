import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated, authenticated }) => {
  return authenticated ?
    (
      <nav className='Nav'>
        <ul>
          <li>
            <NavLink className='NavLink' to="/" exact={true} activeClassName="active">
              Home
          </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to="/games" exact={true} activeClassName="active">
              Games
          </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
      </nav>
    ) : (
      <nav className='Nav'>
        <ul>
          <li>
            <NavLink className='NavLink' to="/" exact={true} activeClassName="active">
              Home
          </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to="/games" exact={true} activeClassName="active">
              Games
          </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to="/login" exact={true} activeClassName="active">
              Login
          </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to="/sign-up" exact={true} activeClassName="active">
              Sign Up
          </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;
