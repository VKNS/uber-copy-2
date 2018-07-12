import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.css';

import SVG from '../commonlyUsedComponents/SVG/svg';

const Header = ({ content }) => (
  <header>
    <nav>
      <div className="row-1 logo ">
        <a href="/">
          <SVG pic={content.image1} />
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
          <SVG pic={content.image2} />
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

Header.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Header;
