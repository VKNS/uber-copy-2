import React from 'react';
import './styles/header.css';
import UbLogo from './images/uber-logo.svg';
import LocIcon from './images/loc-icon.svg';

const Header = () => (
  <header>
    <nav>
      <div className="row-1 logo ">
        <a href="/">
          <img src={UbLogo} alt="UBER" />
        </a>
      </div>

      <div className="row-1 nav-links left from1024">
        <a className="" href="/">
          Для пользователей
        </a>
      </div>
      <div className="from1024 row-1 nav-links left ">
        <a className="" href="/">
          Для водителей
        </a>
      </div>

      <div className="row-1 whitespace" />

      <div className="row-1 nav-links right from1024">
        <a className="" href="/">
          Помощь
        </a>
      </div>
      <div className="row-1 nav-links right from1024">
        <a className="" href="/">
          Вход
        </a>
      </div>

      <div className="row-1 location-icon">
        <a href="/">
          <img src={LocIcon} alt="LOC" />
        </a>
      </div>

      <div className="row-1 driver ">
        <a className="btn-driver" href="/">
          cтать водителем
        </a>
      </div>

      <div className="row-1 menu ">
        <div className="lines first-line " />
        <div className="lines second-line " />
        <div className="lines third-line " />
      </div>
    </nav>
  </header>
);

export default Header;
