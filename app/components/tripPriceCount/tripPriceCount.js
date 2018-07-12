import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG/svg';
import './styles/tripPriceCount.css';

const TripPriceCount = ({ content }) => (
  <section className="trip-price-count">
    <img className="mapPic" src={content.image1.img} alt={content.image1.alt} />

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
                <SVG pic={content.image2} />
              </div>
            </div>

            <div className="row-6">
              <div className="row input finish">
                <input type="text" placeholder="Введите пункт назначения" />
              </div>
              <div className="row btn arrow">
                <SVG pic={content.image3} />
              </div>
            </div>
          </div>
        </div>
        <div className="real-google-map" />
      </div>
    </div>
  </section>
);

TripPriceCount.propTypes = {
  content: PropTypes.array.isRequired,
};

export default TripPriceCount;
