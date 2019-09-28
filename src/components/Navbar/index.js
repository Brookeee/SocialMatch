import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Social Match Dating App
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/' ||
                window.location.pathname === '/rate'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Rate your Date
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === '/profile'
                  ? 'nav-link-active'
                  : 'nav-link'
              }
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
