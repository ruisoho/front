import React from 'react';
import '../misc/App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <a>undercode</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/resource">Resources</NavLink></li>
          <li><NavLink to="/updates">Updates</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;