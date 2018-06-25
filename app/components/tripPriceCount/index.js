import React from 'react';
import './styles/tripPriceCount.css';

import planeImg from './images/paperplane.svg';
import arrowImg from './images/arrow.svg';

class TripPriceCount extends React.Component {
  render() {
    return (
      <section className="trip-price-count">
        <div className="trip-price-form">
          <div className="innerform">
            <h3>
              <div className="price">Цены</div>
              <div className="countPrice">Рассчитать стоимость поездки</div>
            </h3>

            <div className="row-5">
              <div className="row-5-1 input start">
                <input type="text" placeholder="Введите место отправления" />
              </div>
              <div className="row-5-1 btn">
                <img src={planeImg} alt="" />
              </div>
            </div>

            <div className="row-6">
              <div className="row-6-1  input finish">
                <input type="text" placeholder="Введите пункт назначения" />
              </div>
              <div className="row-6-1 btn">
                <img src={arrowImg} alt="" />
              </div>
            </div>

            <div className="small-line" />
          </div>
        </div>
      </section>
    );
  }
}

export default TripPriceCount;
