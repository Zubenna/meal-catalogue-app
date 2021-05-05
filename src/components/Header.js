import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/HeaderStyle.module.css';

const Header = () => (
  <div className={Style.headerBox}>
    <div>
      <Link className={Style.pageName} to="/">Dezyno Restaurant Recipe</Link>
    </div>
    <div className={Style.setMenu}>
      <Link className={Style.linkHome} to="/">Home</Link>
      <Link className={Style.linkItem} to="/about">About Us</Link>
    </div>
  </div>
);

export default Header;
