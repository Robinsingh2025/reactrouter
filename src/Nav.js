import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  const style = {
    color: 'white'
  };
  return (
    <nav>
      <ul className='nav-links'>
        <Link to='/about'>
          <li style={style}>about</li>
        </Link>
        <Link to='/shop'>
          <li style={style}>shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
