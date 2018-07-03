import React from 'react';
import './styles/tripPriceCount.css';

import planeImg from './images/paperplane.svg';
import arrowImg from './images/arrow.svg';

const TripPriceCount = () => (
  <section className="trip-price-count">
    <div className="mapPic" />

    <div className="outer-trip-price-form">
      <div className="trip-price-form">
        <div className="innerform">
          <h3>
            <div className="price">Цены</div>
            <div className="countPrice">Рассчитать стоимость поездки</div>
          </h3>

          <div className="input-form">
            <div className="small-line" />
            <div className="row-5">
              <div className="row input start">
                <input type="text" placeholder="Введите место отправления" />
              </div>
              <div className="row btn plane">
                <img src={planeImg} alt="" />
              </div>
            </div>

            <div className="row-6">
              <div className="row input finish">
                <input type="text" placeholder="Введите пункт назначения" />
              </div>
              <div className="row btn arrow">
                <img src={arrowImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="real-google-map" />
      </div>
    </div>
  </section>
);

export default TripPriceCount;
