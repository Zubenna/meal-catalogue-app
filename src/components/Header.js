import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/HeaderStyle.module.css';

const Header = () => (
  <div className={`${Style.headerBox} ${Style.setFlex}`}>
    <div>
      <Link className={`${Style.pageName} ${Style.setWhite}`} to="/">Dezyno Restaurant Recipe</Link>
    </div>
    <div className={`${Style.setMenu} ${Style.setFlex}`}>
      <Link className={`${Style.linkItem} ${Style.linkHome} ${Style.setWhite}`} to="/">Home</Link>
      <Link className={`${Style.linkItem} ${Style.setWhite}`} to="/about">About Us</Link>
    </div>
  </div>
);

export default Header;
