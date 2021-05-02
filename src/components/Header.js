import React from 'react';
import Style from '../styles/HeaderStyle.module.css';

const Header = () => (
  <div className={Style.headerBox}>
    <div className={Style.setTitle}>
      <h2>Dezyno Restaurant Recipe</h2>
    </div>
  </div>
);

export default Header;
