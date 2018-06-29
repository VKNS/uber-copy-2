import React from 'react';
import './styles/mainAd.css';
import DriversRegistr from './components/driversRegistr';
import arrowImg from './images/arrow.svg';

const MainAd = () => (
  <section className="main-advantages">
    <div className="catchphrase">
      <h1 className="main-phrase">В путь с Uber </h1>
      <h1 className="main-phrase">День принадлежит вам</h1>
    </div>
    <div className="ad-picture" />

    <div className="mb-use till1024">
      <div className="column-1 plz-use ">Начните пользоваться Uber</div>
      <div className="column-1 plz-download ">скачать приложение</div>
      <div className="column-1 arrow ">
        <img src={arrowImg} alt="arr" />
      </div>
    </div>
    <DriversRegistr />
  </section>
);

export default MainAd;
