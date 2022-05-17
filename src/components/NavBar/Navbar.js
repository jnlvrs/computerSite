import React from 'react';
import './Navbar.css'
import * as RiIcons from 'react-icons/ri';
import logo from '../../assets/pics/logo.png'

export default function Navbar() {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="links-container">
        <ul>
          <li><a>Home</a></li>
          <li><a>Register Warranty</a></li>
          <li><a>About Us</a></li>
          <li><a>Login</a></li>
        </ul>
      </div>
      <div className="cart-container">
        <RiIcons.RiShoppingCartFill size={24} />
        <p className='cart-items'><span className='items-number'>0</span></p>
      </div>
    </div>
  );
}
