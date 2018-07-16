import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG/svg';
import './styles/tripPriceCount.css';

import MyGoogleMap from './components/googleMap';

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
        <div className="real-google-map">
          <MyGoogleMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2UxlqPVCgiNVs1KOpu_LyMTIfMd7VdRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  </section>
);

TripPriceCount.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TripPriceCount;
