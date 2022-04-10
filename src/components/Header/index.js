import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Wally.png';
import './styles.css';

export default function Header() {
  return (
    <nav className="Header-main navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/itegraFlix/" >
            <img src={logo} className="Header-logo" alt="ItegraFlix" />
          </Link>
          <label className='Header-title'>ITEGRAFLIX</label>
        </div>
      </div>
      <hr/>
    </nav>
  );
}
