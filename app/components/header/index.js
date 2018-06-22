import React, { PureComponent } from 'react';
import './styles/header.css';
import UbLogo from './images/uber-logo.svg';
import LocIcon from './images/loc-icon.svg';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="logo nav-block">
              <a href="/">
                <img src={UbLogo} alt="UBER" />
              </a>
            </div>

            <div className="whitespace nav-block" />

            <div className="location-icon nav-block">
              <a href="/">
                <img src={LocIcon} alt="LOC" />
              </a>
            </div>

            <div className="driver nav-block">
              <a className="btn-driver" href="/">
                cтать водителем
              </a>
            </div>

            <div className="menu nav-block">
              <div className="lines first-line " />
              <div className="lines second-line " />
              <div className="lines third-line " />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
