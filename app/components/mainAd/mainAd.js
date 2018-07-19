import React from 'react';
import PropTypes from 'prop-types';
import './styles/mainAd.css';
import DriversRegistr from './components/driversRegistr/driversRegistr';

import SVG from '../commonlyUsedComponents/SVG/svg';

const MainAd = ({ content: { image, driversRegistr } }) => (
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
        <SVG pic={image} />
      </div>
    </div>
    <DriversRegistr content={driversRegistr} />
  </section>
);

MainAd.propTypes = {

  content: PropTypes.shape({
    image: PropTypes.object.isRequired,
    driversRegistr: PropTypes.object.isRequired,
  }),

};

export default MainAd;
