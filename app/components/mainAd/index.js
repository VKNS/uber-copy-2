import React from 'react';
import './styles/mainAd.css';
import arrowImg from './images/arrow.svg';

class MainAd extends React.Component {
  render() {
    return (
      <section className="main-advantages">
        <div className="catchprase">
          <div className="inner-div">
            <h1 className="main-phrase">В путь с Uber </h1>
            <h1 className="main-phrase">День принадлежит вам</h1>
          </div>
        </div>
        <div className="ad-picture" />
        <div className="mb-use">
          <div className="column-1 plz-use ">Начните пользоваться Uber</div>
          <div className="column-1 plz-download ">скачать приложение</div>
          <div className="column-1 arrow ">
            <img src={arrowImg} alt="arr" />
          </div>
        </div>
      </section>
    );
  }
}

export default MainAd;
