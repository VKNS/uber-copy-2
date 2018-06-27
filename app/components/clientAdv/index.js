import React from 'react';
import './styles/clientAdv.css';
import carImg from './images/car-with-phone.svg';
import womanImg from './images/woman-with-phone.svg';
import pigImg from './images/piggy-bank.svg';
import arrowImg from './images/arrow.svg';
import { simple, comfortable, affordable } from './text/advantages.json';

class ClientAdv extends React.Component {
  render() {
    return (
      <section className="clients-adv">
        <div className="row-3 column-1">
          <div className="imgBox">
            <img src={womanImg} alt="" />
          </div>
          <div className="heading">
            <h4>Просто</h4>
          </div>
          <div className="advantages-text ">
            <p>{simple}</p>
          </div>
        </div>
        <div className="row-3 column-2">
          <div className="imgBox">
            <img src={carImg} alt="" />
          </div>
          <div className="heading">
            <h4>Удобно</h4>
          </div>
          <div className="advantages-text">
            <p>{comfortable}</p>
          </div>
        </div>
        <div className="row-3 column-3">
          <div className="imgBox">
            <img src={pigImg} alt="" />
          </div>
          <div className="heading">
            <h4>Доступно</h4>
          </div>
          <div className="advantages-text">
            <p>{affordable}</p>
          </div>
        </div>
        <div className="row-4">
          <div className="button advantages-link">
            <div className="link">преимущества поездок с uber</div>
            <div className="arrow">
              <img src={arrowImg} alt="arr" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientAdv;