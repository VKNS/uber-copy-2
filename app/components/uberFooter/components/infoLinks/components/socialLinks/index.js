import React from 'react';
import './styles/socialLinks.css';
import LocImg from './images/loc-icon.svg';
import LangImg from './images/language-icon.svg';
import HelpImg from './images/help-icon.svg';
import FBImg from './images/facebook-icon.svg';
import TwitImg from './images/twitter-icon.svg';
import InImg from './images/in-icon.svg';
import InstagrImg from './images/instagram-icon.svg';

const SocialLinks = () => (
  <div className="social-links">
    <div className="column">
      <span className="link">
        <a href="/">
          <span className="icon">
            <img src={LocImg} alt="" />
          </span>
          <span className="description">Введите Местоположение</span>
        </a>
      </span>
    </div>
    <div className="column">
      <span className="link">
        <a href="/">
          <span className="icon">
            <img src={LangImg} alt="" />
          </span>
          <span className="description lang-link">русский</span>
        </a>
      </span>
    </div>
    <div className="column">
      <span className="link">
        <a href="/">
          <span className="icon">
            <img src={HelpImg} alt="" />
          </span>
          <span className="description">Помощь</span>
        </a>
      </span>
    </div>
    <div className="column mass-icons">
      <span className="icon link">
        <a href="/">
          <img src={FBImg} alt="" />
        </a>
      </span>
      <span className="icon link">
        <a href="/">
          <img src={TwitImg} alt="" />
        </a>
      </span>
      <span className="icon link">
        <a href="/">
          <img src={InImg} alt="" />
        </a>
      </span>
      <span className="icon">
        <a href="/">
          <img src={InstagrImg} alt="" />
        </a>
      </span>
    </div>
  </div>
);

export default SocialLinks;
