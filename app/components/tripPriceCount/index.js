import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG';
import './styles/tripPriceCount.css';

const TripPriceCount = props => {
  const { content } = props;
  return (
    <section className="trip-price-count">
      <img
        className="mapPic"
        src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/images/fare-estimate/mobile-fare-estimate-map-d7bf04aff9.jpg"
        alt=""
      />

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
                  <SVG pic={content[0]} />
                </div>
              </div>

              <div className="row-6">
                <div className="row input finish">
                  <input type="text" placeholder="Введите пункт назначения" />
                </div>
                <div className="row btn arrow">
                  <SVG pic={content[1]} />
                </div>
              </div>
            </div>
          </div>
          <div className="real-google-map" />
        </div>
      </div>
    </section>
  );
};

TripPriceCount.propTypes = {
  content: PropTypes.array.isRequired,
};

export default TripPriceCount;
